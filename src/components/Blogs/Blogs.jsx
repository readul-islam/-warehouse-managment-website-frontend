import React from 'react';
import { DiJavascript1 } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";

const Blogs = () => {
    return (
        <div className=''>
            <div className='border text-center my-2 py-2 lg:mt-6'>
                <h3 className='text-[22px] md:text-3xl lg:text-5xl font-bold'>Frequently Asked Questions</h3>
            </div>
            
            <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-2 p-2 md:gap-y-44 sm:p-6 sm:gap-6 md:p-6 lg:gap-y-44 lg:p-12'>

                
                <div className="flex justify-center md:h-[800px] lg:h-[540px] p-3 md:p-6 rounded-2xl">
                    <div className="border border-gray-200 rounded-xl block bg-white">
                        <div className="py-3 p-2 border-b border-gray-300 font-semibold text-center text-[18px]">
                        When should you use nodejs and when should you use mongodb?
                        </div>
                        
                        <div className="shadow-2xl rounded-2xl p-2 sm:p-4 md:p-5">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                                <span className='text-red-500 inline-block'><DiNodejsSmall/></span>
                                <span className=''>vs</span>
                                <span className='text-red-500 inline-block'><DiMongodb/></span>
                            </h5>
                            <p className="text-gray-700 text-base">
                            The Node.JS is a Server side language. Node.js is primarily used for non-blocking, event driven server, due to its single-threaded nature. it's used for traditional web site and back-end api sevices. But was designed with real time push-based architectures in mind. On the other hand the MongoDB is a NoSQL database. NoSQL database like MongoDB are a good choice when your data is document centric and does not fit well into the schema of a relational database. when you need to accommodate massive scale, when you are replidly prototyping. and a few other use cases.

                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:h-[650px] lg:h-[540px] p-3 md:p-6 rounded-2xl">
                    <div className="border border-gray-200 rounded-xl block bg-white">
                        <div className="py-3 p-2 border-b border-gray-300 font-semibold text-center text-[18px]">
                        Differences between sql and nosql databases?

                        </div>
                        
                        <div className="rounded-2xl shadow-2xl p-2 sm:p-4 md:p-5">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                                <span className='text-red-500 inline-block'><DiJavascript1/></span>
                                <span className=''>vs</span>
                                <span className='text-red-500 inline-block'><DiNodejsSmall/></span>
                            </h5>
                            <p className="text-gray-700 text-base">
                            SQL is a relational database. are vertically scalable and table based. SQL database have fixed or static or predefined schema. SQL database better for multi-row transactions. On the Other hand NoSQL non-relational database. NoSQL database have dynamic schemas for unstructured data. and horizontally scalable are document key-value and wide-column stores. it's better for unstructured data like document or JSON.

                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:h-[650px] lg:h-[540px] p-3 md:p-6 rounded-2xl">
                    <div className="border border-gray-200 rounded-xl block bg-white">
                        <div className="py-3 border-gray-300 font-semibold text-center text-[18px]">
                        Difference between javascript and nodejs?
                        </div>
                        
                        <div className="shadow-2xl rounded-2xl p-2 sm:p-4 md:p-5">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                                <span className='text-red-500 inline-block'><DiJavascript1/></span>
                                <span className=''>vs</span>
                                <span className='text-red-500 inline-block'><DiNodejsSmall/></span>
                            </h5>
                            <p className="text-gray-700 text-base">
                            Node.JS and JavaScript both of these are used for Programming. But there is a significant difference between Node.JS and JavaScript. 
                            JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with 
                            interactive effects on a Webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to 
                            JavaScript code when run in the V8 engine or via the node interpreter. 
                            Javascript is used in frontend development. And the Node.js is used in server-side development.

                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:h-[650px] lg:h-[540px] p-3 md:p-6 rounded-2xl">
                    <div className="border border-gray-200 rounded-xl block bg-white">
                        <div className="py-3 p-2 border-b border-gray-300 font-semibold text-center text-[18px]">
                        What is the purpose of jwt and how does it work?
                        </div>
                        
                        <div className="rounded-2xl shadow-2xl p-2 sm:p-4 md:p-5">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                                <span className='text-red-500 inline-block'><DiJavascript1/></span>
                                <span className=''>vs</span>
                                <span className='text-red-500 inline-block'><DiNodejsSmall/></span>
                            </h5>
                            <p className="text-gray-700 text-base">
                            JWT Means JSON Web Token. is an open standard used to share security information between two  parties a client and server. Each JWT contains encoded Json objects including a set of claims. JWTs are signed using a cryptographic algorighm to ensure that claims can not be altered after the token is issued. And Specialy a JWT is string made up of three parts separated by dots. and serialized using base 64. (Header and the payload) and The signature.

                            </p>
                            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Blogs;