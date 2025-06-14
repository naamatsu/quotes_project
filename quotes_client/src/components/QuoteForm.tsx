import React, { useState } from "react";
import { FormContainer, Input, Button, ErrorMessage, InputWrapper } from "./QuoteForm.styles";

interface QuoteFormProps {
    notifyCountChnaged: (count: number) => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ notifyCountChnaged }) => {
    const [count, setCount] = useState<number>();
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = parseInt(value, 10);

        if (!value || isNaN(numericValue)) {
            setCount(undefined);
            setIsValid(false);
            return;
        }

        setCount(numericValue);
        setIsValid(numericValue > 0 && numericValue <= 1000000);
    };

    const handleClick = () => {
        if (count && isValid) {
            notifyCountChnaged(count);
        }
    };

    return (
    <FormContainer>
        <InputWrapper>
            <Input
               type='number'
               value={count}
               onChange={handleChange} 
               placeholder="Please Enter number of Quotes"
            />
            <ErrorMessage>
                {!isValid && count !== undefined ? "Number of quotes is invalid" : "\u00A0"}
            </ErrorMessage>
        </InputWrapper>
        <Button onClick={handleClick} disabled={!isValid}>Get Quotes</Button>
    </FormContainer>
    )
}

export default QuoteForm