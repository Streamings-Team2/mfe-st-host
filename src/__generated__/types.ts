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
