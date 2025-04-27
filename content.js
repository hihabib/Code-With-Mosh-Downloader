(async () => {
    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

    const links = Array.from(document.querySelectorAll("ul.section-list a.item"));
    const sectionOrderMap = {};
    const data_obj = {};
    let sectionCounter = 1;

    // Build data object with section numbering
    links.forEach((link, i) => {
        const sectionEl = link.closest(".course-section");
        let rawSectionName = sectionEl?.querySelector(".section-title")?.textContent.trim() || "Unknown Section";
        rawSectionName = rawSectionName.replace(/\:/g, ".").replace(/[\\\/:*?"<>|]/g, "_");

        if (!sectionOrderMap[rawSectionName]) {
            sectionOrderMap[rawSectionName] = `${sectionCounter}. ${rawSectionName}`;
            sectionCounter++;
        }

        const sec_name_prefixed = sectionOrderMap[rawSectionName];
        const lecture_id = link.id;
        const lecture_name = link.querySelector(".lecture-name")?.textContent.replace(/(\r\n|\n|\r)/g, " ").trim().replace(/[\\\/:*?"<>|]/g, "_") || "Untitled";

        data_obj[lecture_id] = {
            id: i,
            sec_name: sec_name_prefixed,
            lecture_name,
            getName() {
                return `${this.id + 1}. ${this.lecture_name}`;
            }
        };
    });

    console.log("Lecture map constructed. Starting download...");

    for (let i = 0; i < links.length; i++) {
        links[i].click();
        await sleep(4000); // wait for video/download button to load

        const downloadBtn = document.querySelector("a.download");
        if (!downloadBtn) {
            console.warn(`No download button for lecture ${i + 1}`);
            continue;
        }

        const lectureData = data_obj[links[i].id];
        const folder = `Mosh Course/${lectureData.sec_name}`;
        const filename = `${folder}/${lectureData.getName()}.mp4`;

        console.log("\nDownloading:");
        console.log("folder: ", folder);
        console.log("filename: ", filename);
        

        chrome.runtime.sendMessage({
            action: "download",
            url: downloadBtn.href,
            filename: filename
        });

        await sleep(4000); // wait between downloads
    }

    console.log("✅ Finished downloading all lectures.");
})();
