const input = document.getElementById('colorInput');
const display = document.getElementById('colorDisplay');
const codeText = document.getElementById('colorCode');

input.addEventListener('input', () => {
let raw = input.value.trim();

  // --- 入力制限部分 ---
  // #付きなら7文字、なしなら6文字までに制限
if (raw.startsWith('#')) {
    if (raw.length > 7) {
    raw = raw.slice(0, 7);
    }
} else {
    if (raw.length > 6) {
raw = raw.slice(0, 6);
    }
}

  // #を自動補完
let color = raw.startsWith('#') ? raw : '#' + raw;

  // 入力欄を補正（自動補完済みテキストで上書き）
input.value = raw;

  // カラーコード形式チェック (#を含む6桁 or 3桁)
const valid = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

if (valid.test(color)) {
    display.style.backgroundColor = color;
    codeText.textContent = color;
    codeText.style.color = color;
} else {
    display.style.backgroundColor = '#000';
    codeText.textContent = '無効なカラーコード';
    codeText.style.color = '#fff';
}
});

// リンク例から色をセットする関数
function setExample(color) {
input.value = color;
input.dispatchEvent(new Event('input'));
}
