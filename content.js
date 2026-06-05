function mcPride() {

  const host = location.hostname;
  
  if (host !== "localhost" && host !== "127.0.0.1") return;
  
  const logoUrl = browser.runtime.getURL("mcpride.png");
  
  function replaceLogos() {
    document.querySelectorAll("img.mcm-logo").forEach(img => {
      img.src = logoUrl;
    });
  }
  
  replaceLogos();
  
  const observer = new MutationObserver(replaceLogos);
  observer.observe(document.body, { childList: true, subtree: true });
}

mcPride()
