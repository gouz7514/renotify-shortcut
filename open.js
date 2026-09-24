// 페이지 언어(<html lang>)에 맞는 단축어를 단축어 앱으로 바로 연다.
// iCloud 공유 페이지의 'Get Shortcut' 버튼과 같은 방식(workflow://shortcuts/<id>)을 쓴다.
(function () {
  var lang = document.documentElement.lang === "en" ? "en" : "ko";
  var id = window.RENOTIFY_SHORTCUTS[lang];
  var appURL = "workflow://shortcuts/" + encodeURIComponent(id);
  var webURL = "https://www.icloud.com/shortcuts/" + id;

  document.getElementById("open").href = appURL;
  document.getElementById("web").href = webURL;

  var isApple = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);
  if (isApple) {
    window.location.href = appURL;
  }

  // 앱이 안 열렸을 때(권한 팝업 취소, 다른 기기 등) 직접 누를 수 있게 버튼을 보여준다.
  setTimeout(function () {
    document.body.classList.add("fallback");
  }, isApple ? 2500 : 0);
})();
