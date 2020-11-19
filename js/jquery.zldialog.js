/**
 * ZLDialog 1.4.5
 * Date: 2016-03-25
 * © 2013-2016 LangZhai(智能小菜菜)
 * This is licensed under the GNU LGPL, version 3 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl.html
 * Project home: https://github.com/LangZhai/ZLDialog
 *
 * ==========更新历史==========
 * -2016-03-25    1.4.5-
 *  1.【Update】重构部分代码。
 *
 * -2016-03-23    1.4.4-
 *  1.【Debug】修复IE8中遮罩层样式异常的BUG；
 *  2.【Debug】修复预览面板鼠标事件异常的BUG；
 *  3.【Update】重构部分代码。
 *
 *  -2016-03-17    1.4.1-
 *   1.【Add】加入国际化功能；
 *   2.【Update】重新梳理目录结构。
 *
 * -2015-12-04    1.3.9-
 *   1.【Debug】修复显示对话框位置异常的BUG；
 *   2.【Debug】修复关闭对话框时未删除遮罩层的BUG；
 *   3.【Debug】修复size参数的'full'值在firefox中高度异常的BUG；
 *   4.【Debug】修复多对话框实例下resize冲突的BUG；
 *   5.【Debug】修复resize导致timeout/interval失效的BUG。
 *
 * -2015-11-26    1.3.4-
 *   1.【Debug】修复加载外部链接size参数设置失效的BUG；
 *   2.【Update】为size参数增加'full'值，修改padding参数'iframe'值功能；
 *   3.【Update】清理冗余代码。
 *
 * -2014-02-28    1.3.1-
 *   1.【Debug】修复IE11中外部链接加载崩溃BUG。（解决方法为换用1.11.0版jQuery，如在其他jQuery版本中发现加载BUG请设置inFrame:true）
 *
 * -2013-12-13    1.3.0-
 *   1.【Update】优化滚动条用户体验。
 *
 * -2013-12-09    1.2.9-
 *   1.【Debug】修复页面滚动后预览面板定位BUG；
 *   2.【Update】为对话框按钮设置默认回调函数。
 *
 * -2013-12-05    1.2.7-
 *   1.【Debug】修复IE7中预览面板加载图片大小BUG。
 *
 * -2013-12-04    1.2.6-
 *   1.【Debug】修复按钮无法自动适配宽度的BUG；
 *   2.【Debug】修复页面滚动后对话框拖动时的定位BUG；
 *   3.【Debug】修复页面滚动后对话框关闭时的定位BUG。
 *
 * -2013-10-15    1.2.3-
 *   1.【Add】扩充加载链接方法使其可自定义加载模式。
 *
 * -2013-10-08    1.2.2-
 *   1.【Update】定义私有作用域避免代码污染。
 *
 * -2013-09-11    1.2.1-
 *   1.【Remove】废弃realWidth和realHeight方法，使用jQuery的outerWidth和outerHeight代替。
 *
 * -2013-08-28    1.2.0-
 *   1.【Debug】修复对话框关闭时位置闪跳的BUG。
 *
 * -2013-08-19    1.1.9-
 *   1.【Debug】修复预览面板图片大小BUG；
 *   2.【Update】动态限制对话框大小。
 *
 * -2013-08-14    1.1.7-
 *   1.【Add】加入预览面板direction属性；
 *   2.【Update】去掉预览面板图片最大宽度限制；
 *   3.【Update】为预览面板设置默认padding值。
 *
 * -2013-08-12    1.1.4-
 *   1.【Update】修改对话框内容区域的overflow为auto。
 *
 * -2013-08-08    1.1.3-
 *   1.【Debug】修复浏览器窗口resize导致对话框自动关闭失效的BUG。
 *
 * -2013-08-01    1.1.2-
 *   1.【Debug】修复IE下预览面板大小无法自适应的BUG；
 *   2.【Update】优化浏览器窗口resize事件；
 *   3.【Update】修改ZLDialog出现/隐藏动画为从屏幕中间垂直展开/收缩；
 *   4.【Debug】修复IE8及以下浏览器预览面板位置BUG；
 *   5.【Update】调整预览面板对齐方式为中线对齐。
 *
 * -2013-07-26    1.0.7-
 *   1.【Debug】修复ZLDialog样式被覆盖的BUG；
 *   2.【Add】加入显示预览面板功能。
 *
 * -2013-07-23    1.0.5-
 *   1.【Update】将“消息框”更名为“警告框”；
 *   2.【Add】加入消息框功能。
 *
 * -2013-07-10    1.0.3-
 *   1.【Add】加入确认警告框功能；
 *   2.【Add】加入加载外部链接功能；
 *   3.【Update】代码优化。
 *
 * -2013-07-02    1.0.0-
 *   1.【Add】ZLDialog诞生。
 */

(function ($) {
    /**
     * 显示对话框
     * @param  option  {Object}    对话框参数列表
     * @example
     * $.dialog({
	 *     title:对话框标题,
	 *     content:对话框内容,
	 *     hideX:是否隐藏右上角关闭按钮,
	 *     buttons:对话框按钮数组,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:对话框大小,
	 *     drag:是否允许拖动对话框,
	 *     lock:是否添加背景锁定,
	 *     showBack:对话框显示回调函数,
	 *     closeBack:对话框关闭回调函数,
	 *     padding:对话框内容padding
	 * });
     */
    $.dialog = function (option) {
        var $window = $(window),
            $body = $('body'),
            $ZLDialog,
            $dialogLock,
            $dialogTitleDIV,
            $dialogBody,
            $dialogFoot,
            $btn,
            timeout,
            interval,
            id = new Date().getTime(),
            closeDialog = function () {
                var position = $ZLDialog.position(),
                    deviation = {
                        left: position.left - (($window.width() - $ZLDialog.width()) / 2),
                        top: position.top - (($window.height() - $ZLDialog.height()) / 2)
                    };
                clearTimeout(timeout);
                interval = setInterval(function () {
                    $ZLDialog.css({
                        left: ($window.width() - $ZLDialog.width()) / 2 + deviation.left,
                        top: ($window.height() - $ZLDialog.height()) / 2 + deviation.top
                    });
                }, 10);
                if ($dialogLock !== undefined) {
                    $dialogLock.fadeOut(200).promise().done(function () {
                        $dialogLock.remove();
                    });
                }
                $ZLDialog.stop().hide(200).promise().done(function () {
                    if ($.type(option.closeBack) === 'function') {
                        option.closeBack();
                    }
                    clearInterval(interval);
                    $ZLDialog.remove();
                    $window.off('resize.dialog' + id);
                });
            };
        if (option == undefined) {
            option = {};
        }
        if (option.message) {
            $ZLDialog = $('<div class=\'ZLDialog\'><div class=\'dialogBody\'></div></div>');
            $dialogBody = $ZLDialog.children('.dialogBody');
        } else {
            $ZLDialog = $('<div class=\'ZLDialog\'><div class=\'dialogTitleDIV\'><div class=\'dialogTitleSpan\'>' + (option.title || $.dialog.l18n.title) + '</div><a class=\'dialogTitleClose\' title=\'' + $.dialog.l18n.close + '\'>x</a></div><div class=\'dialogBody\'></div><div class=\'dialogFoot\'></div></div>');
            $dialogTitleDIV = $ZLDialog.children('.dialogTitleDIV');
            $dialogBody = $ZLDialog.children('.dialogBody');
            $dialogFoot = $ZLDialog.children('.dialogFoot');
            $dialogTitleDIV.on('click.dialog', '.dialogTitleClose', closeDialog);
            if (option.hideX) {
                $dialogTitleDIV.children('.dialogTitleClose').remove();
            }
            if (option.size !== undefined) {
                if (option.size === 'full') {
                    $ZLDialog.width(9999);
                    $dialogBody.height(9999);
                } else {
                    $ZLDialog.width(option.size.width);
                    $dialogBody.height(option.size.height);
                }
            }
            if (option.drag === undefined || option.drag) {
                $dialogTitleDIV.on('mousedown.dialog', function (e) {
                    var width = $window.width() - $ZLDialog.outerWidth(),
                        height = $window.height() - $ZLDialog.outerHeight(),
                        position = $ZLDialog.position(),
                        initial = {
                            left: e.clientX,
                            top: e.clientY
                        };
                    $body.off('mouseup.dialog').on('mouseup.dialog', function () {
                        $body.off('mousemove.dialog');
                    }).on('mousemove.dialog', function (e) {
                        var left = e.clientX - initial.left + position.left,
                            top = e.clientY - initial.top + position.top;
                        left = left < 0 ? 0 : left > width ? width : left;
                        top = top < 0 ? 0 : top > height ? height : top;
                        $ZLDialog.css({
                            left: left,
                            top: top
                        });
                    });
                });
            }
        }
        if (option.content !== undefined) {
            $dialogBody.html(option.content);
            $('img', $dialogBody).each(function () {
                $(this).on('load.dialog', function () {
                    $window.triggerHandler('resize.dialog' + id);
                });
            });
        }
        if (option.lock === undefined || option.lock) {
            $dialogLock = $('<div class=\'dialogLock\'></div>').appendTo($body);
        }
        if (option.padding !== undefined) {
            if (option.padding === 'iframe') {
                $dialogBody.css({
                    padding: 0,
                    overflow: 'hidden'
                });
            } else {
                $dialogBody.css({
                    padding: option.padding
                });
            }
        }
        if ($.type(option.buttons) === 'array') {
            $.each(option.buttons, function (i, btn) {
                $btn = $('<a>' + btn.text + '</a>');
                $dialogFoot.append($btn);
                if (btn.callback === undefined) {
                    $btn.on('click.dialog', closeDialog);
                }
                else if ($.type(btn.callback) === 'function') {
                    $btn.on('click.dialog', btn.callback);
                }
                else {
                    $btn.on('click.dialog', eval(btn.callback));
                }
            });
        }
        $ZLDialog.appendTo($body).promise().done(function () {
            $window.on('resize.dialog' + id, function () {
                $dialogBody.css('max-height', $window.height() - 50 - ($dialogTitleDIV === undefined ? 0 : $dialogTitleDIV.outerHeight(true) + $dialogFoot.outerHeight(true)));
                $ZLDialog.css('max-width', $window.width() - 50).promise().done(function () {
                    $ZLDialog.stop().animate({
                        left: ($window.width() - $ZLDialog.width()) / 2,
                        top: ($window.height() - $ZLDialog.height()) / 2
                    }, 200);
                });
            }).triggerHandler('resize.dialog' + id);
            interval = setInterval(function () {
                $ZLDialog.css({
                    left: ($window.width() - $ZLDialog.width()) / 2,
                    top: ($window.height() - $ZLDialog.height()) / 2
                });
            }, 10);
            if ($dialogLock !== undefined) {
                $dialogLock.fadeTo(200, .3);
            }
            $ZLDialog.stop().show(200).promise().done(function () {
                if ($.type(option.showBack) === 'function') {
                    option.showBack();
                }
                if ($.type(option.timeout) === 'number') {
                    timeout = setTimeout(closeDialog, option.timeout);
                }
                setTimeout(function () {
                    clearInterval(interval);
                }, 10);
            });
        });
        return closeDialog;
    };

    /**
     * 显示消息框
     * @param  option  {Object}    消息框参数列表
     * @example
     * $.dialog.message({
	 *     content:消息框内容,
	 *     timeout:自动关闭延时（毫秒）,
	 *     lock:是否添加背景锁定,
	 *     showBack:消息框显示回调函数,
	 *     closeBack:消息框关闭回调函数
	 * });
     */
    $.dialog.message = function (option) {
        if (option == undefined) {
            option = {};
        }
        option.message = true;
        option.title = undefined;
        option.hideX = undefined;
        option.buttons = undefined;
        option.size = undefined;
        option.drag = undefined;
        option.padding = undefined;
        if (option.timeout === undefined) {
            option.timeout = 2000;
        }
        if (option.lock === undefined) {
            option.lock = false;
        }
        option.content = '<span class=\'dialogMsgSpan\'>' + option.content + '</span>';
        return $.dialog(option);
    };

    /**
     * 显示警告框
     * @param  option  {Object}    警告框参数列表
     * @example
     * $.dialog.alert({
	 *     title:警告框标题,
	 *     content:警告框内容,
	 *     hideX:是否隐藏右上角关闭按钮,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:警告框大小,
	 *     drag:是否允许拖动警告框,
	 *     lock:是否添加背景锁定,
	 *     showBack:警告框显示回调函数,
	 *     closeBack:警告框关闭回调函数,
	 *     padding:警告框内容padding
	 * });
     */
    $.dialog.alert = function (option) {
        if (option == undefined) {
            option = {};
        }
        option.message = undefined;
        if (option.title === undefined) {
            option.title = $.dialog.l18n.alert;
        }
        if (option.hideX === undefined) {
            option.hideX = true;
        }
        option.buttons = [
            {
                text: $.dialog.l18n.ok
            }
        ];
        option.content = '<span class=\'dialogMsgSpan\'>' + option.content + '</span>';
        return $.dialog(option);
    };

    /**
     * 显示确认警告框
     * @param  option  {Object}    警告框参数列表
     * @param  yes  {Function}    确认按钮回调函数
     * @param  no  {Function}    取消按钮回调函数
     * @example
     * $.dialog.confirm({
	 *     title:警告框标题,
	 *     content:警告框内容,
	 *     hideX:是否隐藏右上角关闭按钮,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:警告框大小,
	 *     drag:是否允许拖动警告框,
	 *     lock:是否添加背景锁定,
	 *     showBack:警告框显示回调函数,
	 *     closeBack:警告框关闭回调函数,
	 *     padding:警告框内容padding
	 * },function(){},function(){});
     */
    $.dialog.confirm = function (option, yes, no) {
        if (option == undefined) {
            option = {};
        }
        option.message = undefined;
        if (option.title === undefined) {
            option.title = $.dialog.l18n.confirm;
        }
        if (option.content === undefined) {
            option.content = $.dialog.l18n.confirmText;
        }
        if (option.hideX === undefined) {
            option.hideX = true;
        }
        option.buttons = [
            {
                text: $.dialog.l18n.yes,
                callback: yes
            },
            {
                text: $.dialog.l18n.no,
                callback: no
            }
        ];
        option.content = '<span class=\'dialogMsgSpan\'>' + option.content + '</span>';
        return $.dialog(option);
    };

    /**
     * 加载外部链接
     * @param  option  {Object}    对话框参数列表
     * @example
     * $.dialog.open({
	 *	   url:链接地址,
	 *     title:对话框标题,
	 *     hideX:是否隐藏右上角关闭按钮,
	 *     buttons:对话框按钮数组,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:对话框大小,
	 *     drag:是否允许拖动对话框,
	 *     lock:是否添加背景锁定,
	 *     showBack:对话框显示回调函数,
	 *     closeBack:对话框关闭回调函数,
	 *     padding:对话框内容padding,
	 *     inFrame:是否在Iframe中加载
	 * });
     */
    $.dialog.open = function (option) {
        if (option == undefined) {
            option = {};
        }
        option.message = undefined;
        if (option.inFrame === undefined) {
            option.inFrame = false;
        }
        if (option.inFrame) {
            option.content = '<iframe frameborder=\'no\' src=\'' + option.url + '\' style=\'border:none;width:100%;height:100%\'></iframe>';
            option.padding = 'iframe';
        } else {
            $.ajax({
                url: option.url,
                async: false,
                dataType: 'html'
            }).done(function (data) {
                option.content = data;
            }).fail(function () {
                option.content = '<iframe frameborder=\'no\' src=\'' + option.url + '\' style=\'border:none;width:100%;height:100%\'></iframe>';
                option.padding = 'iframe';
            });
        }
        return $.dialog(option);
    };

    /**
     * 加载元素内容
     * @param  option  {Object}    对话框参数列表
     * @example
     * $('#loginDIV').dialog({
	 *     title:对话框标题,
	 *     hideX:是否隐藏右上角关闭按钮,
	 *     buttons:对话框按钮数组,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:对话框大小,
	 *     drag:是否允许拖动对话框,
	 *     lock:是否添加背景锁定,
	 *     showBack:对话框显示回调函数,
	 *     closeBack:对话框关闭回调函数,
	 *     padding:对话框内容padding
	 * });
     */
    $.fn.dialog = function (option) {
        if (option == undefined) {
            option = {};
        }
        option.message = undefined;
        option.content = $(this).html();
        return $.dialog(option);
    };

    /**
     * 显示预览面板
     * @param  option  {Object}    预览面板参数列表
     * @example
     * $('#loginDIV').preview({
	 * 	   content:预览内容,
	 *     type:预览类型,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:预览面板大小,
	 *     showBack:预览面板显示回调函数,
	 *     closeBack:预览面板关闭回调函数,
	 *     padding:预览面板内容padding,
	 *     direction:预览面板依附位置
	 * });
     */
    $.fn.preview = function (option) {
        if (option == undefined) {
            option = {};
        }
        $(this).each(function () {
            var $this = $(this),
                $panel = $('<div class=\'ZLDialog_panel\'></div>'),
                css = {},
                timeout;
            if (option.direction === undefined) {
                option.direction = 'right';
            }
            if (option.padding === undefined) {
                option.padding = 10;
            }
            if (option.timeout === undefined) {
                option.timeout = 500;
            }
            if (option.content !== undefined) {
                if (option.type === 'img') {
                    $panel.html(option.size === undefined ? '<img src=\'' + option.content + '\'>' : '<img style=\'' + (option.size.width ? 'width:' + option.size.width + 'px;' : '') + (option.size.height ? 'height:' + option.size.height + 'px;' : '') + '\' src=\'' + option.content + '\'>');
                    option.padding = 0;
                } else {
                    $panel.html(option.content);
                }
            }
            if (!(option.type === 'img' || option.size === undefined)) {
                css.width = option.size.width;
                css.height = option.size.height;
            }
            css.padding = option.padding;
            $.merge($this, $panel).on('mouseenter.dialog', function () {
                clearTimeout(timeout);
                if (!$panel.data('loaded')) {
                    $panel.data('loaded', true).appendTo($('body')).promise().done(function () {
                        var offset = $this.offset();
                        if (option.direction === 'top' || option.direction === 'bottom') {
                            css.left = offset.left + ($this.outerWidth(true) - $panel.outerWidth(true)) / 2;
                            css.top = option.direction === 'top' ? offset.top - $panel.outerHeight(true) - 5 : offset.top + $this.outerHeight(true) + 5;
                        } else {
                            css.top = offset.top + ($this.outerHeight(true) - $panel.outerHeight(true)) / 2;
                            css.left = option.direction === 'left' ? offset.left - $panel.outerWidth(true) - 5 : offset.left + $this.outerWidth(true) + 5;
                        }
                        if (option.type === 'img') {
                            css.height = $panel.children().height();
                        }
                        $panel.hide().css(css);
                    });
                }
                $panel.fadeIn().promise().done(function () {
                    if ($.type(option.showBack) === 'function') {
                        option.showBack();
                    }
                });
            }).on('mouseleave.dialog', function () {
                timeout = setTimeout(function () {
                    $panel.fadeOut().promise().done(function () {
                        if ($.type(option.closeBack) === 'function') {
                            option.closeBack();
                        }
                    });
                }, option.timeout);
            });
        });
    };

    /**
     * 国际化字符串
     */
    $.dialog.l18n = {
        // title: 'Dialog',
            // alert: 'Success🦄✨',
            confirm: 'Confirm',
            ok: 'OK',
            yes: 'Yes',
            no: 'No',
            confirmText: 'Are you sure that you want to perform this action?',
            close: 'Close'
    };
})($);
