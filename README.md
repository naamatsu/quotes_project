# quotes_project

📘 Quotes Service API
A Node.js + TypeScript Express backend that fetches quotes from the FavQs API, supports large quote requests using continuation tokens, handles FavQs rate limits, and returns data in batches suitable for client-side virtualization.

🚀 Features
✅ Fetch quotes from FavQs with pagination

✅ Handles FavQs API rate limiting (30 requests / 20 seconds)

✅ Supports large quote counts via continuation tokens

✅ Simple GET endpoint: /quotes

✅ Returns quotes in batches (default 25 per request)

✅ Caches session state temporarily using node-cache


🛠 Installation

1. Clone the repository
  git clone https://github.com/your-org/quotes-service.git
  cd quotes-service

2. Install dependencies
    npm install

3. Set up environment variables
    Create a .env file in the root:
    FAVQS_API_KEY=your_favqs_api_key_here
    PORT=3000

You can get your API key by signing up at https://favqs.com.

▶️ Running the Server

Development mode (with auto-restart):
    npm run dev

Production build:
    npm run build
    npm start

📬 API Usage

GET /quotes
Fetches quotes in batches (default: 25 quotes per response) and uses continuation tokens to paginate results until the desired count is reached.

🔗 Endpoint

GET /quotes?count=<number>&continuationToken=<token>
🔸 Query Parameters
Name	Type	Required	Description
count	number	✅ Yes	Total number of quotes requested across all paginated requests
continuationToken	string	❌ No	Token from a previous response to resume fetching next batch

⚠️ Each request will return up to 25 quotes. The client is expected to call the endpoint again with the continuationToken if done: false.

✅ Sample Request
GET /quotes?count=100
🔁 Follow-up (if continuationToken is returned)
GET /quotes?count=100&continuationToken=a22dbf98-4d0f-4dce-91fe-b134e6821d33
🔄 Sample Response
{
  "quotes": [
    {
      "id": 18417,
      "body": "The only true wisdom is in knowing you know nothing.",
      "author": "Socrates",
      "tags": ["wisdom", "philosophy"],
      ...
    },
    ...
  ],
  "continuationToken": "a22dbf98-4d0f-4dce-91fe-b134e6821d33",
  "done": false
}
Explanation:
quotes: An array of up to 25 quote objects

continuationToken: Pass this in the next request to continue

done: Indicates whether the requested total count has been fully served

⚠️ Rate Limiting
FavQs API allows 30 requests per 20 seconds. This backend includes exponential backoff with retries to handle rate-limit errors gracefully. If FavQs is under heavy load, fetching large quote counts may take longer.

🧹 Notes
All sessions are cached in memory and expire after 10 minutes

If no requests are made within 10 minutes, the continuation token will expire

If FavQs API runs out of quotes, the service will return as many as available and done: true







