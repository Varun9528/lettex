import AdminLayout from '@/components/admin/AdminLayout';
import { NotificationProvider } from '@/context/NotificationContext';

export default function AdminLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NotificationProvider>
      <AdminLayout>{children}</AdminLayout>
    </NotificationProvider>
  );
}