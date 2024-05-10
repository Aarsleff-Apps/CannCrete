import { AppShell, Group, Image, Title } from "@mantine/core";
import NextImage from "next/image";
import CannonLogo from "/public/android-chrome-512x512.png";

export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Image
              component={NextImage}
              src={CannonLogo}
              alt="My image"
              h={30}
            />
            <Title order={3}>CannCrete</Title>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
