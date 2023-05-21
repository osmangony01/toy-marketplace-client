
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Banner from '../Home/Banner';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>

            <Banner></Banner>
            <div className='my-16'>
                <h2 className='text-orange-500 text-3xl font-bold text-center mb-10'>Question Blog</h2>
                <div className='w-3/4 mx-auto bg-white '>

                    <Accordion allowZeroExpanded  className='border-0'>
                        <AccordionItem className='mb-3'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b> What is an access token and refresh token? How do they work and where should we store them on the client-side?</b>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='pb-2'>An access token and a refresh token are both important components in the process of authentication and authorization used in many web applications and APIs. </p>

                                <p className='pb-2'><b>Access Token:</b> An access token is a credential that is issued by an authentication server or an identity provider to a client application after successful authentication. It represents the authorization granted to the client application to access specific resources or perform certain actions on behalf of a user. Access tokens are typically time-limited and are used to authenticate and authorize subsequent requests to protected APIs or services. When making API calls, the client application includes the access token in the request headers to prove its identity and permissions.</p>

                                <p className='pb-2'><b>Refresh Token:</b> A refresh token is a long-lived credential that is also issued by an authentication server or identity provider along with the access token. Unlike access tokens, refresh tokens are not meant to be included in API requests. Instead, they are securely stored on the client-side, often in a secure cookie or a persistent storage mechanism. When an access token expires, the client application can use the refresh token to request a new access token without requiring the user to re-authenticate. This process is known as token refresh or token renewal. </p>

                                <p className='pb-2'>Access tokens and refresh tokens work together in a typical authentication flow as follows:</p>
                                <p className='pb-2'><b>Authentication:</b> The client application sends the user's credentials (e.g., username and password) to the authentication server or identity provider.</p>
                                <p className='pb-2'><b>Token Issuance:</b> If the credentials are valid, the authentication server generates an access token and a refresh token.</p>
                                <p className='pb-2'><b>Access Token Usage:</b> The client application includes the access token in the request headers when making API calls to access protected resources. This token serves as proof of authorization and allows the server to identify the user and their permissions.</p>
                                <p className='pb-2'><b>Token Expiration:</b> Access tokens have a limited lifespan, typically ranging from a few minutes to a few hours. Once the access token expires, it becomes invalid, and further API requests using that token will be denied.</p>
                                <p className='pb-2'><b>Token Refresh:</b> If the client application needs to continue accessing protected resources after the access token expires, it can use the refresh token to request a new access token without re-authenticating the user.</p>
                                <p className='pb-2'>Regarding where to store tokens on the client-side, it depends on the security requirements and capabilities of the client application. Here are a few common options:
                                </p>
                                <p className='pb-2'><b>Secure Cookie:</b> Tokens can be stored in an HTTP-only secure cookie, which provides built-in security mechanisms. Cookies are automatically sent with each request to the server, making it convenient for token inclusion. However, care should be taken to mitigate cross-site scripting (XSS) attacks.</p>
                                <p className='pb-2'><b>Local Storage:</b> Tokens can be stored in the client's local storage or session storage. This option allows the tokens to persist across browser sessions and can be easily accessed by JavaScript. However, local storage is vulnerable to cross-site scripting (XSS) attacks, and tokens may be accessible to any script running on the same domain.</p>
                                <p className='pb-2'><b>IndexedDB or Web Storage:</b> Tokens can be stored in IndexedDB or Web Storage (such as localStorage or sessionStorage) with appropriate encryption and security measures. This approach provides more control and flexibility in terms of storage, but it requires additional implementation effort.</p>

                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className='mb-3'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>Compare SQL and NoSQL databases?</b>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className='overflow-x-auto'>
                                    <table className='table w-full'>
                                        <thead>
                                            <tr>
                                                <th>SQL</th>
                                                <th>NoSQL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                                <td>Non-relational or distributed database system.</td>
                                            </tr>
                                            <tr>
                                                <td>These databases have fixed or static or predefined schema</td>
                                                <td>They have a dynamic schema</td>
                                            </tr>
                                            <tr>
                                                <td>These databases are not suited for hierarchical data storage.</td>
                                                <td>These databases are best suited for hierarchical data storage.</td>
                                            </tr>
                                            <tr>
                                                <td>These databases are best suited for complex queries</td>
                                                <td>These databases are not so good for complex queries</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className='mb-3'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>What is express js? What is Nest JS?</b>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='pb-2'>Express.js and Nest.js are both popular web application frameworks used in server-side development. Here's a brief overview of each:</p>
                                <p className='pb-2'><b>Express.js:</b> Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple and intuitive API for building web applications and APIs. Express.js is known for its unopinionated nature, allowing developers to have full control over the application's structure and behavior. It offers features such as routing, middleware support, template engines, and easy integration with various plugins and libraries. Express.js is lightweight and has a large ecosystem of third-party modules, making it a popular choice for developing fast and scalable server-side applications.</p>
                                <p className='pb-2'><b>Nest.js:</b> Nest.js is a progressive, opinionated, and powerful framework for building efficient and scalable server-side applications with TypeScript. It is built on top of Express.js and leverages the concepts of dependency injection, modularity, and decorators to provide a structured and maintainable architecture. Nest.js follows a modular approach, allowing developers to organize their code into reusable and encapsulated modules. It offers features like routing, middleware support, dependency injection, ORM integration, WebSockets, GraphQL, and more. Nest.js embraces TypeScript and provides strong typing, decorators, and other TypeScript-specific features, making it an excellent choice for building enterprise-level applications.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className='mb-3'>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <b>What is MongoDB aggregate and how does it work</b>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className='pb-2'>In MongoDB, the aggregate method is a powerful tool used for data processing and aggregation operations on collections. It allows you to perform complex operations and transformations on the data, such as grouping, filtering, sorting, joining, and computing aggregations. The aggregate method uses a pipeline approach, where you can chain multiple stages together to define the sequence of operations to be performed on the data.</p>
                                <p className='pb-2'>Here's an overview of how the MongoDB aggregate method works:</p>
                                <p className='pb-2'><b>Pipeline Stages: </b> The aggregate method takes an array of pipeline stages as its argument. Each stage represents an operation to be performed on the data. You can specify multiple stages in the pipeline to create a sequence of transformations.</p>
                                <p className='pb-2'><b>Pipeline Operators:</b> Each pipeline stage utilizes a specific operator or command to perform its operation. MongoDB provides a wide range of operators to handle various aggregation tasks. Some common pipeline operators like $match, $group, $sort, $project, $lookup, $unwind</p>
                                <p className='pb-2'><b>Execution Order:</b> The pipeline stages are executed in the order they are specified in the pipeline array. Each stage takes the input from the previous stage and processes it further, producing an intermediate result. The final result is generated after all stages in the pipeline have been executed.</p>
                                <p className='pb-2'><b>Result Output:</b> The aggregate method returns the result of the aggregation operation, which can be a cursor or an array of documents. You can use additional pipeline stages or projection operators to shape the output as needed.</p>

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Blog;
