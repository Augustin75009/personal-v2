
const copyMailId = document.querySelectorAll('#mail');

copyMailId.forEach(copyText => {
    copyText.addEventListener('click', () => {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(copyText);
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            document.execCommand('copy');
            selection.removeAllRanges();
            document.querySelector(".copied-box").classList.add("showBox");
            // const mailId = copyText.textContent;
            // copyText.textContent = 'Copied!';
            // copyText.classList.add('success');

            setTimeout(() => {
                // copyText.textContent = mailId;
                // copyText.classList.remove('success');
            }, 1000);
        } catch (e) {
            copyText.textContent = 'Couldn\'t copy, hit Ctrl+C!';
            // copyText.classList.add('error');

            setTimeout(() => {
                // errorMsg.classList.remove('show');
            }, 1200);
        }
    });
});
