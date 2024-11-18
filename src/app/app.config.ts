import { setContext } from '@apollo/client/link/context';
import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);

      const basic = setContext(() => ({
        headers: {
          Accept: 'charset=utf-8',
        },
      }));

      const auth = setContext(() => {
        const token = localStorage.getItem('authToken');

        if (token === null) {
          return {};
        } else {
          return {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        }
      });

      return {
        link: ApolloLink.from([basic, auth, httpLink.create({ uri: 'http://localhost:3001/graphql' })]),
        cache: new InMemoryCache(),
      };
    })
  ]
};
