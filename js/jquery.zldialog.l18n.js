/**
 * ZLDialog 1.4.5
 * Date: 2016-03-25
 * © 2013-2016 LangZhai(智能小菜菜)
 * This is licensed under the GNU LGPL, version 3 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl.html
 * Project home: https://github.com/LangZhai/ZLDialog
 */

(function ($) {
    /**
     * 国际化字符串
     */
    var L18N = {
        CHS: {
            // title: '对话框',
            // alert: 'Success🦄✨',
            confirm: '确认',
            ok: '确定',
            yes: '确定',
            no: '取消',
            confirmText: '确定要执行这个操作吗？',
            close: '关闭'
        },
        CHT: {
            // title: '對話方塊',
            // alert: 'Success🦄✨',
            confirm: '確認',
            ok: '確定',
            yes: '確定',
            no: '取消',
            confirmText: '確定要執行這個操作嗎？ ',
            close: '關閉'
        },
        EN: {
            // title: 'Dialog',
            // alert: 'Success🦄✨',
            confirm: 'Confirm',
            ok: 'OK',
            yes: 'Yes',
            no: 'No',
            confirmText: 'Are you sure that you want to perform this action?',
            close: 'Close'
        },
        JP: {
            // title: 'ダイアログ',
            // alert: 'Success🦄✨',
            confirm: '確認',
            ok: 'はい',
            yes: 'はい',
            no: 'いいえ',
            confirmText: 'この操作を実行してもよろしいですか？',
            close: '閉じる'
        }
    };

    /**
     * 设置国际化字符串
     * @param  l18n  {String/Object}    语言名称/国际化字符串对象
     * @example
     * $.dialog.setL18n(语言名称);
     * $.dialog.setL18n({
     * 	   title:对话框标题文本,
     * 	   alert:警告框标题文本,
     * 	   confirm:确认警告框标题文本,
     * 	   ok:警告框确定按钮文本,
     * 	   yes:确认警告框确定按钮文本,
     * 	   no:确认警告框取消按钮文本,
     * 	   confirmText:确认警告框内容文本,
     * 	   close:右上角关闭按钮文本
     * });
     */
    $.dialog.setL18n = function (l18n) {
        if ($.type(l18n) === 'string') {
            $.extend($.dialog.l18n, L18N[l18n.toUpperCase()]);
        } else {
            $.extend($.dialog.l18n, l18n);
        }
    };
})($);