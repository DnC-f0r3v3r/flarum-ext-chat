'use strict';

System.register('pushedx/realtime-chat/components/ChatFrame', ['flarum/Component', 'flarum/helpers/icon', 'flarum/components/LoadingIndicator'], function (_export, _context) {
    var Component, icon, LoadingIndicator, ChatFrame;
    return {
        setters: [function (_flarumComponent) {
            Component = _flarumComponent.default;
        }, function (_flarumHelpersIcon) {
            icon = _flarumHelpersIcon.default;
        }, function (_flarumComponentsLoadingIndicator) {
            LoadingIndicator = _flarumComponentsLoadingIndicator.default;
        }],
        execute: function () {
            ChatFrame = function (_Component) {
                babelHelpers.inherits(ChatFrame, _Component);

                function ChatFrame() {
                    babelHelpers.classCallCheck(this, ChatFrame);
                    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ChatFrame).apply(this, arguments));
                }

                babelHelpers.createClass(ChatFrame, [{
                    key: 'init',
                    value: function init() {
                        // initial state of the button
                        this.loading = false;
                    }
                }, {
                    key: 'focus',
                    value: function focus(e) {
                        e.target.parentNode.parentNode.className = "chat active";
                    }
                }, {
                    key: 'blur',
                    value: function blur(e) {
                        e.target.parentNode.parentNode.className = "chat";
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        return m('div', { className: 'chat', id: 'chat' }, [m('div', { id: 'chat-header' }, [m('h2', 'PushEdx Chat'), m('input', { type: 'text', id: 'chat-input', onfocus: this.focus, onblur: this.blur }), this.loading ? LoadingIndicator.component({ className: 'loading Button-icon' }) : m('span'), m('div', { className: 'wrapper' })])]);
                    }
                }, {
                    key: 'process',
                    value: function process(e) {}
                    /*
                    // get the file from the input field
                    const data = new FormData();
                    data.append('image', $(e.target)[0].files[0]);
                      // set the button in the loading state (and redraw the element!)
                    this.loading = true;
                    m.redraw();
                      // send a POST request to the api
                    app.request({
                        method: 'POST',
                        url: app.forum.attribute('apiUrl') + '/image/upload',
                        serialize: raw => raw,
                        data
                    }).then(
                        this.success.bind(this),
                        this.failure.bind(this)
                    );
                    */


                    /**
                     * Handles errors.
                     *
                     * @param message
                     */

                }, {
                    key: 'failure',
                    value: function failure(message) {}
                    // todo show popup


                    /**
                     * Appends the image's link to the body of the composer.
                     *
                     * @param image
                     */

                }, {
                    key: 'success',
                    value: function success(image) {
                        /*
                        var link = image.data.attributes.url;
                          // create a markdown string that holds the image link
                        var markdownString = '\n![image ' + link + '](' + link + ')\n';
                          // place the Markdown image link in the Composer
                        this.textAreaObj.insertAtCursor(markdownString);
                          // if we are not starting a new discussion, the variable is defined
                        if (typeof this.textAreaObj.props.preview !== 'undefined') {
                            // show what we just uploaded
                            this.textAreaObj.props.preview();
                        }
                          // reset the button for a new upload
                        setTimeout(() => {
                            document.getElementById("flagrow-image-upload-form").reset();
                            this.loading = false;
                        }, 1000);
                        */
                    }
                }]);
                return ChatFrame;
            }(Component);

            _export('default', ChatFrame);
        }
    };
});;
'use strict';

System.register('pushedx/realtime-chat/main', ['flarum/extend', 'flarum/components/IndexPage', 'pushedx/realtime-chat/components/ChatFrame'], function (_export, _context) {
    var extend, IndexPage, ChatFrame;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsIndexPage) {
            IndexPage = _flarumComponentsIndexPage.default;
        }, function (_pushedxRealtimeChatComponentsChatFrame) {
            ChatFrame = _pushedxRealtimeChatComponentsChatFrame.default;
        }],
        execute: function () {

            app.initializers.add('pushedx-realtime-chat', function (app) {
                /**
                 * Add the upload button to the post composer.
                 */
                extend(IndexPage.prototype, 'viewItems', function (items) {
                    var chatFrame = new ChatFrame();
                    items.add('pushedx-chat-frame', chatFrame);
                });
            });
        }
    };
});