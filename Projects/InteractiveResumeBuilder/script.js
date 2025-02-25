document.addEventListener("DOMContentLoaded", function () {

    function updatePreview() {
        document.getElementById("previewName").innerText = document.getElementById("name").value || "Your Name";
        document.getElementById("previewEmail").innerText = "Email: " + (document.getElementById("email").value || "example@example.com");
        document.getElementById("previewPhone").innerText = "Phone: " + (document.getElementById("phone").value || "1234567890");
        document.getElementById("previewSummary").innerText = "Profile Summary: " + (document.getElementById("summary").value || "Brief about yourself");

        // Update Education Preview
        let educationList = document.getElementById("previewEducation");
        educationList.innerHTML = "";
        document.querySelectorAll("#educationFields .input-group").forEach(entry => {
            let degree = entry.querySelector("[name='education']").value || "Degree";
            let branch = entry.querySelector("[name='branch']").value || "Branch";
            let year = entry.querySelector("[name='year']").value || "Year";

            let listItem = document.createElement("li");
            listItem.innerText = `${degree} - ${branch} (${year})`;
            educationList.appendChild(listItem);
        });

        // Update Experience Preview
        let experienceList = document.getElementById("previewExperience");
        experienceList.innerHTML = "";
        document.querySelectorAll("#experienceFields .input-group").forEach(entry => {
            let jobTitle = entry.querySelector("[name='experience']").value || "Job Title & Company";
            
            let listItem = document.createElement("li");
            listItem.innerText = jobTitle;
            experienceList.appendChild(listItem);
        });

        // Update Skills
        let skills = document.getElementById("skills").value.split(",").map(skill => skill.trim()).filter(skill => skill);
        document.getElementById("previewSkills").innerText = skills.length ? "Skills: " + skills.join(", ") : "Skillset will appear here";
    }

    // Attach event listeners to form inputs
    document.querySelectorAll("#resumeForm input, #resumeForm textarea").forEach(input => {
        input.addEventListener("input", updatePreview);
    });

    // Add Education Entry
    document.querySelector(".add-education").addEventListener("click", function (event) {
        event.preventDefault();
        
        let newField = document.createElement("div");
        newField.classList.add("input-group", "mb-2");
        newField.innerHTML = `
            <input type="text" class="form-control" placeholder="Degree & Institution" name="education">
            <input type="text" class="form-control" placeholder="Branch" name="branch">
            <input type="text" class="form-control" placeholder="Year of Passing" name="year">
            <button class="btn btn-danger remove-education">-</button>
        `;

        document.getElementById("educationFields").appendChild(newField);

        newField.querySelector(".remove-education").addEventListener("click", function () {
            newField.remove();
            updatePreview();
        });

        newField.querySelectorAll("input").forEach(input => {
            input.addEventListener("input", updatePreview);
        });

        updatePreview();
    });

    // Add Experience Entry
    document.querySelector(".add-experience").addEventListener("click", function (event) {
        event.preventDefault();
        
        let newField = document.createElement("div");
        newField.classList.add("input-group", "mb-2");
        newField.innerHTML = `
            <input type="text" class="form-control" placeholder="Job Title & Company" name="experience">
            <button class="btn btn-danger remove-experience">-</button>
        `;

        document.getElementById("experienceFields").appendChild(newField);

        newField.querySelector(".remove-experience").addEventListener("click", function () {
            newField.remove();
            updatePreview();
        });

        newField.querySelectorAll("input").forEach(input => {
            input.addEventListener("input", updatePreview);
        });

        updatePreview();
    });

    // Clear Form Button
    document.getElementById("clearForm").addEventListener("click", function () {
        document.getElementById("resumeForm").reset();
        document.getElementById("educationFields").innerHTML = `<h5>Education</h5>`;
        document.getElementById("experienceFields").innerHTML = `<h5>Experience</h5>`;
        updatePreview();
    });

    // Generate PDF
    document.getElementById("generateResume").addEventListener("click", function () {
        const { jsPDF } = window.jspdf;
        if (!jsPDF) {
            alert("jsPDF failed to load. Please check your internet connection.");
            return;
        }
    
        let doc = new jsPDF();
        let y = 20; // Starting Y position
    
        // Set font and styling
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Resume", 105, y, { align: "center" });
    
        y += 10;
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
    
        // Name
        doc.setFont("helvetica", "bold");
        doc.text("Name:", 10, y);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("previewName").innerText, 40, y);
    
        y += 10;
    
        // Contact Info
        doc.setFont("helvetica", "bold");
        doc.text("Email:", 10, y);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("previewEmail").innerText.replace("Email: ", ""), 40, y);
    
        y += 10;
    
        doc.setFont("helvetica", "bold");
        doc.text("Phone:", 10, y);
        doc.setFont("helvetica", "normal");
        doc.text(document.getElementById("previewPhone").innerText.replace("Phone: ", ""), 40, y);
    
        y += 15; // Add space
    
        // Profile Summary
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("Profile Summary", 10, y);
        y += 7;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(document.getElementById("previewSummary").innerText.replace("Profile Summary: ", ""), 10, y, { maxWidth: 180 });
    
        y += 15;
    
        // Education Section
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("Education", 10, y);
        y += 7;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        
        document.querySelectorAll("#previewEducation li").forEach((li) => {
            doc.text(`- ${li.innerText}`, 10, y);
            y += 7;
        });
    
        y += 10;
    
        // Experience Section
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("Experience", 10, y);
        y += 7;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        
        document.querySelectorAll("#previewExperience li").forEach((li) => {
            doc.text(`- ${li.innerText}`, 10, y);
            y += 7;
        });
    
        y += 10;
    
        // Skills Section
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("Skills", 10, y);
        y += 7;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(document.getElementById("previewSkills").innerText.replace("Skills: ", ""), 10, y, { maxWidth: 180 });
    
        // Save the PDF
        doc.save("resume.pdf");
    });
    

});
