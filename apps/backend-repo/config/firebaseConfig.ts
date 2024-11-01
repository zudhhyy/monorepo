import admin from 'firebase-admin';

// IRL, this should be save in firebaseServiceAccountKey.json
admin.initializeApp({
  credential: admin.credential.cert({
    project_id: 'ebuddy-technical-test-1aac5',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDfYczg5kC1JyEl\nDfDeCgTBuhTGW8hJiZTu1tsfxBE6Ar6duO5upb65QPXMbC/jzyGbvn4JULDWSI1P\nXXkIaBjlBYNon9yWvAL/t83UrYgio5pAqFq1NyZUWPcf3pCMAe4jxTLJe92vGu7D\nDPWamTmG/jL+gi6gXWPsg0qE1A5DDpuBKYbwZaXw8dGEOGPAme+VhzB7mNIZPcHs\npHsFAI3fgmM9w6gVb4Ur1NLFEBK8Gs05gtGaS9HWQXK3hNpYeHjcLPOJcGLB1ajp\no9qJnYPktOqUgS+By/cQLF4GJkj/62tEuvY0MI6SaMRWMNIROzvdpHwbHJwBVW4c\n/xVjqStxAgMBAAECggEAOGUnBdJrnLBzyDiUSmJKICSb8RYj4xjmbkP1Dzh/Rt+B\ngy04mNukYn25cHIRxxg4emrlw/FIq9imQFavY0Vwn4U8T1IorS9rLGcZgmuLFn+q\nRk+akuyI8zuArF2SrZ4hIou7Di4E4hvREpI3gV/Uq7WKZ0Gzhs39F61vx0gID7ps\nC6ENeQ5Thip2PgRHX6SdoyvBS9Ys22OmrivCw5ZycX5bRrPdF/8Oz9bsOnvf5BRc\nbU7vwU9HNRwEtfniACwpB9ni2BS9f+cHt6HtqmWH1/szc7vz/gKhQVZspckRAQJA\nhS5SGqUIe7H//4/vrKiG9XryFqn2OZxOkbTw/aS+9wKBgQD3gBbuQ0PctOr9UJ1y\nmMwW0D4/5XAq/MqpIWEUhDH2Ru1OHnuzePakq4TQexDe3WQIcGx2liCseGQwjNNP\n8GFFWOzM1VA/lJFjnt7RtV/ESz6t9uT7hl2FWM30bF2nrfW/IJESi40ixoXdeZ3y\njXRRHAzlaQdamiNnd2IdRMBk9wKBgQDnDaxoIy6yVde9ZT2bHzeO5JBwS4cYBUWN\ncZ3agq0IKMYGidh8tZjeia1wQOHKlpHQBBIPmX4zth2oYMqnIWL5fZ6xWmJCAOgX\na97sTulpdMqYAzwjfTJ/66fAl223k39Ezy73tDG2OSk4o/X+cVqZnk8Bk+8iDAfy\nHV66ZFag1wKBgGez3+fNf23G0H97e708kKcucibLuAgLC896EPdLvLN4XI5S73nv\nwUiWJXxFVHhNQ1DV6lx14xLhDvnYx+HC0r7/15ir+IfrdE/NjYdI++t/q6+wt5k8\nX4sz/nffwA42MbX3q1Gd73EWxZhbEPdElew2WKD3NQGdfCAqQY4J9KNZAoGBAL1/\nc2U9ZbERwo0tGWe+JJznTKcs6rGCsVaeVm6+Ohe1CSSXrZwqfCQYGs00CXtUHmbS\nz9VHeEAFHzHXoJ2OPlSM+LhQfsHPaIq9B+oblkfNZ9Ng49PffKl5pu3HxE6JhBn1\nKnoxqYvgObSglMKISVwwgG+02q273FBwUh7g6EOlAoGALr7lPFPJFFqjqoixARyq\nq55yV7KYz+3XvwyoYNKoX3MSqRKxtKIgDbO3Gckb/09de7Cq2CpWhfmTGQPOJ6Jw\n930syF9w7Q109dZDMMNEOJgOZbPSFBMKfWVQsDC0pP86rdg7r/ACMqoEeJLjF18l\n0Yxw8lerzfOhYxJIpNe5iwA=\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-p6nte@ebuddy-technical-test-1aac5.iam.gserviceaccount.com',
  } as admin.ServiceAccount),
});

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
