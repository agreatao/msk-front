import { ConfigProvider, Button } from "antd";
import React, { useCallback } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import urlParse from 'utils/urlParse';

const ANTD = {
    en: require("antd/es/locale/en_US"),
    cn: require("antd/es/locale/zh_CN"),
};

export default function LocaleProvider({ children, messages }) {
    if (!messages) throw new Error("locale messages is not defined");
    const lang = useSelector((state) => state.locale);
    return (
        <ConfigProvider lang={ANTD[lang]}>
            <IntlProvider locale={lang} messages={messages[lang]}>
                {children}
            </IntlProvider>
        </ConfigProvider>
    );
}

export const LocaleSwitch = () => {
    const lang = useSelector(state => state.locale);

    const onClick = useCallback((e) => {
        e.preventDefault();
        const { locale, method } = urlParse('/calc/:locale/:method', window.location.pathname);
        window.location.href = `/calc/${locale === 'en' ? 'cn' : 'en'}/${method}`;
    }, []);

    return <Button size="small" onClick={onClick}>{lang === 'en' ? '中文' : 'English'}</Button>
}