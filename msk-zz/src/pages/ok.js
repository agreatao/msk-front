import React, { useState } from 'react';
import Tip from 'components/Tip';
import { Input, Descriptions } from 'antd';
import Form from 'components/Form';
import Result from 'components/Result';
import { ok } from 'api';
import { useIntl } from 'react-intl';

export default function OK() {
    const intl = useIntl();
    const [result, setResult] = useState({ visible: false, output: null, input: null, error: null });

    function calculate(values) {
        ok(values)
            .then(data => {
                setResult({ visible: true, output: data, input: values });
            })
            .catch(e => {
                console.error(e);
            });
    }

    function close() {
        setResult({ visible: false, output: null, input: null, error: null });
    }

    return <React.Fragment>
        <Tip method="OK" tips={['INSTRUCTIONS', 'NOTES', 'STEP']} />
        <div className="calculate-wrapper">
            <Form onFinish={calculate}>
                <Form.Item label="Vertex" name="vertex" rules={[{ required: true }]}>
                    <Input autoComplete="off" />
                </Form.Item>
            </Form>
        </div>
        <Result visible={result.visible} onClose={close}>
            {result.input &&
                <Descriptions column={2} title={intl.formatMessage({ id: 'INPUT' })}>
                    <Descriptions.Item label="Vertex">{result.input.vertex}</Descriptions.Item>
                </Descriptions>}
            <div className="divider"></div>
            {result.output &&
                <Descriptions column={1} title={intl.formatMessage({ id: 'OUTPUT' })}>
                    <Descriptions.Item label="AC">{result.output.ac}</Descriptions.Item>
                </Descriptions>}
        </Result>
    </React.Fragment>
}