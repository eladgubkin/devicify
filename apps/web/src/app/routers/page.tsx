import { ContentLayout } from '@web/components/admin-panel/content-layout';
import { prisma } from '@web/lib/prisma';

export default async function RoutersPage() {
  const routers = await prisma.router.findMany();

  return (
    <ContentLayout title="Routers">
      <h1>Routers</h1>
    </ContentLayout>
  );
}
