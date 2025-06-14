import React, { useState } from 'react';
import { Container , Header, Title } from './QuotesOfTheDay.styles';
import QuoteForm from "../components/QuoteForm";
import { getQuotes } from '../services/quotes.service';
import type { Quote } from '../types';
import QuotesGrid from '../components/QuotesGrid';

function QuotesOfTheDay() {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [done, setDone] = useState<boolean>(false);

    const fetchQuotesPaged = async (count: number, continuationToken?: string) => {
        const result = await getQuotes({ count, continuationToken })
        setQuotes(result.quotes);
        setDone(result.done);
    };

  return (
    <Container>
        <Header>
            <Title>Quotes Of the Day</Title>
        </Header>
        <QuoteForm handleGetQuotes={fetchQuotesPaged} />
        <QuotesGrid quotes={quotes} done={done} />
    </Container>
  )
}

export default QuotesOfTheDay