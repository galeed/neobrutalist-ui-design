import { boolean, jsonb, pgTable, text, timestamp, unique } from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  userId: text('userId').notNull().references(() => user.id, { onDelete: 'cascade' }),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: text('userId').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('accessToken'), refreshToken: text('refreshToken'), idToken: text('idToken'),
  accessTokenExpiresAt: timestamp('accessTokenExpiresAt'), refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
  scope: text('scope'), password: text('password'),
  createdAt: timestamp('createdAt').notNull().defaultNow(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(), identifier: text('identifier').notNull(), value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(), createdAt: timestamp('createdAt').defaultNow(), updatedAt: timestamp('updatedAt').defaultNow(),
})

export const socialConnection = pgTable('social_connection', {
  id: text('id').primaryKey(), userId: text('userId').notNull(), provider: text('provider').notNull(), accountId: text('accountId').notNull(),
  displayName: text('displayName').notNull(), handle: text('handle'), avatarUrl: text('avatarUrl'), profileUrl: text('profileUrl'),
  isVerified: boolean('isVerified').notNull().default(false), isArtist: boolean('isArtist').notNull().default(false), isPodcast: boolean('isPodcast').notNull().default(false),
  metadata: jsonb('metadata').notNull().default({}), createdAt: timestamp('createdAt').notNull().defaultNow(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
}, (table) => ({ ownerProviderAccount: unique().on(table.userId, table.provider, table.accountId) }))

export const contentDraft = pgTable('content_draft', {
  id: text('id').primaryKey(), userId: text('userId').notNull(), title: text('title').notNull(), body: text('body').notNull(),
  hashtags: jsonb('hashtags').notNull().default([]), media: jsonb('media').notNull().default([]), targetProviders: jsonb('targetProviders').notNull().default([]),
  createdAt: timestamp('createdAt').notNull().defaultNow(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const schema = { user, session, account, verification, socialConnection, contentDraft }
