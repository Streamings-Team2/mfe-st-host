/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Flight = {
  __typename?: 'Flight';
  airlineName: Scalars['String']['output'];
  arrivalTime: Scalars['String']['output'];
  departureTime: Scalars['String']['output'];
  flightNumber: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: Scalars['String']['output'];
  terminal: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  allFlights: Array<Flight>;
  flights: FlightResponse;
};


export type QueryFlightsArgs = {
  airlineName?: InputMaybe<Scalars['String']['input']>;
  flightNumber?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type FlightResponse = {
  __typename?: 'flightResponse';
  code: Scalars['Int']['output'];
  flights: Array<Maybe<Flight>>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type FlightsQueryVariables = Exact<{
  airlineName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  flightNumber?: InputMaybe<Scalars['String']['input']>;
}>;


export type FlightsQuery = { __typename?: 'Query', flights: { __typename?: 'flightResponse', code: number, message: string, success: boolean, flights: Array<{ __typename?: 'Flight', id: string, flightNumber: string, airlineName: string, departureTime: string, arrivalTime: string, status: string, terminal: string } | null> } };


export const FlightsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Flights"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"airlineName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"flightNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flights"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"airlineName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"airlineName"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"flightNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"flightNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"flights"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"flightNumber"}},{"kind":"Field","name":{"kind":"Name","value":"airlineName"}},{"kind":"Field","name":{"kind":"Name","value":"departureTime"}},{"kind":"Field","name":{"kind":"Name","value":"arrivalTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"terminal"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<FlightsQuery, FlightsQueryVariables>;