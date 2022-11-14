import React, { useState } from 'react';
import { View } from 'app/design/view';
import { TextInput, Button } from 'app/design/form-controls';
import { Row } from 'app/design/layout';

interface Props {
    onSubmit: (text: string) => void;
}

const MessageComposer: React.FC<Props> = ({ onSubmit }) => {
    const [text, setText] = useState('');
    const handleSubmit = () => {
        if (!text.length) return;
        onSubmit(text);
        setText('')
    }

    return (
        <Row className="bg-orange-300 p-3">
            <TextInput
                className="border border-slate-300 flex-1"
                placeholder="Aa"
                value={text}
                onChange={event => setText(event.nativeEvent.text)}
                onSubmitEditing={handleSubmit}
            />
            <View className="bg-orange-500">
                <Button
                    onPress={handleSubmit}
                    title="Send"
                />
            </View>
        </Row>
    )
}

export default MessageComposer;