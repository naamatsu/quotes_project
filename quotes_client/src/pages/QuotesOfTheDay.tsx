import React, { useState } from 'react';
import { Container , Header, Title } from './QuotesOfTheDay.styles';
import QuoteForm from "../components/QuoteForm";
import QuotesGrid from '../components/QuotesGrid';

function QuotesOfTheDay() {
    const [count, setCount] = useState<number>(0);

    const handleCountChanged = (updatedCount: number) => {
        setCount(updatedCount);
    }

  return (
    <Container>
        <Header>
            <Title>Quotes Of the Day</Title>
        </Header>
        <QuoteForm notifyCountChnaged={handleCountChanged} />
        <QuotesGrid count={count} />
    </Container>
  )
}

export default QuotesOfTheDay