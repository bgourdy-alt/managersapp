import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const manager = await prisma.user.create({
    data: {
      email: "manager@test.com",
      name: "Alice Manager",
      role: "MANAGER",
    },
  })

  const collaborator = await prisma.user.create({
    data: {
      email: "collab@test.com",
      name: "Bob Collaborateur",
      role: "COLLABORATEUR",
      managerId: manager.id,
    },
  })

  await prisma.client.create({
    data: {
      name: "Client Test",
      contact: "contact@client.com",
      hasContract: true,
      orderSite: "https://client-orders.com",
    }
  })

  const item = await prisma.item.create({
    data: {
      ref: "ITM-001",
      label: "Clavier mécanique",
      stock: 20,
      minThreshold: 5,
    }
  })

  await prisma.reorderRequest.create({
    data: {
      itemId: item.id,
      qty: 10,
      estCost: 500,
      requesterId: collaborator.id,
      status: "PENDING",
    }
  })

  console.log("Seed terminé ✅")
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
