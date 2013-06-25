chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {

    var focus = window.top.document,
        found_flg = false,
        el = document.getElementById('_subRoomMemberList');


    while (found_flg === false) {
        if (focus.activeElement) {
            focus = focus.activeElement;
        } else {
            found_flg = true;
        }
    }


    if (! el && el.getAttribute('style') !== 'display: none;') {
        return false;
    }


    var len = el.childNodes.length,
        i = 0,
        id = null,
        text = '';

    for (i = 0; i < len; i++) {
        id = el.childNodes[i].getAttribute('data-aid');
        text += (id !== null) ? '[To:'+ id +'] ': '';
    }

    if (text === '') {
        return false;
    } else {
        text += 'ALL\n';
    }
	

    if (focus.getAttribute('id') !== '_chatText') {
        return false;
    }


    var start = focus.selectionStart,
        end   = focus.selectionEnd;

    // テキストエリアのvalueを更新する
    focus.value = focus.value.substring(0, start)+
        text +
        focus.value.substring(end, focus.value.length);

	focus.setSelectionRange(start + text.length, start + text.length);
});
