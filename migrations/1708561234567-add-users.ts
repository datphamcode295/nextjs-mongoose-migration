// import { MigrationInterface } from 'ts-migrate-mongoose'
import type { Connection } from 'mongoose';

// export class AddUsers implements MigrationInterface {
//   async up(): Promise<void> {
//     // Add your migration logic here
//     const users = [
//       { email: 'user1@example.com', name: 'User One' },
//       { email: 'user2@example.com', name: 'User Two' }
//     ]

//     // Using the MongoDB driver directly since models might not be ready
//     const db = this.db
//     await db.collection('users').insertMany(users)
//   }

//   async down(): Promise<void> {
//     // Revert migration
//     const db = this.db
//     await db.collection('users').deleteMany({
//       email: { 
//         $in: ['user1@example.com', 'user2@example.com']
//       }
//     })
//   }
// }

export async function up(connection: Connection) {
  // Add your migration logic here
  const users = [
    { email: 'user1@example.com', name: 'User One' },
    { email: 'user2@example.com', name: 'User Two' }
  ]

  // Using the MongoDB driver directly since models might not be ready
  await connection.collection('users').insertMany(users)
  console.log('Users added:', users)
}

export async function down(connection: Connection) {
  // Revert migration
  await connection.collection('users').deleteMany({
    email: { 
      $in: ['user1@example.com', 'user2@example.com']
    }
  })

  console.log('Users removed')
}