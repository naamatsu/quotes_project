import React, { useState } from "react";
import { FormContainer, Input, Button } from "./QuoteForm.styles";

interface QuoteFormProps {
    handleGetQuotes: (count: number) => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ handleGetQuotes }) => {
    const [count, setCount] = useState<number>(1);

    return (
        <FormContainer>
            <Input
               type='number'
               value={count || 1}
               onChange={(e) => setCount(parseInt(e.target.value))} 
               placeholder="Please Enter number of Quotes"
            />
            <Button onClick={() => handleGetQuotes(count)}>Get Quotes</Button>
        </FormContainer>
    )
}

export default QuoteForm