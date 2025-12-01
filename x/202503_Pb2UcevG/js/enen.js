
function isSelected(el) {
    return el.selectedIndex != 0;
}

  function checkForm() {
    var el;
    var obj = document.enenForm;

    el = obj.elements['answers[41719_283443]'];
    if (!isSelected(el)) {
      alert("「欲しい景品をどちらかお選びください。」を選択してください。");
      return false;
    }

}