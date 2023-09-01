// have to create file in same directory: email.js
// the only line that goes in email.js is:
// const email = "<my-email-here>";
const handleCopyEmail = ()=>{
    navigator.clipboard.writeText(email);
};
const copyEmailButton = document.getElementById("copy-email-button");
copyEmailButton.addEventListener("click", handleCopyEmail);

//# sourceMappingURL=index.e8da0e2f.js.map
