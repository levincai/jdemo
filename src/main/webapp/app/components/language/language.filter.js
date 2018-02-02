(function() {
    'use strict';

    angular
        .module('jdemoApp')
        .filter('findLanguageFromKey', findLanguageFromKey)
        .filter('findLanguageRtlFromKey', findLanguageRtlFromKey);

    var languages = {
        'hy': { name: 'Հայերեն' },
        'zh-cn': { name: '中文（简体）' },
        'zh-tw': { name: '繁體中文' },
        'en': { name: 'English' }
        // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
    };

    function findLanguageFromKey() {
        return findLanguageFromKeyFilter;

        function findLanguageFromKeyFilter(lang) {
            return languages[lang].name;
        }
    }

    function findLanguageRtlFromKey() {
        return findLanguageRtlFromKeyFilter;

        function findLanguageRtlFromKeyFilter(lang) {
            return languages[lang].rtl;
        }
    }

})();
