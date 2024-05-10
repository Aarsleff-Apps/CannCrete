import { ActionIcon, AppShell, Group, Image, Title, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import NextImage from "next/image";
import CannonLogo from "/public/android-chrome-512x512.png";
import classes from "./Nav.module.css";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
export default function Nav({ children }: { children: React.ReactNode }) {
    const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();
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
            <ActionIcon variant="default" aria-label="Settings" onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}>
                <IconSun className={cx(classes.light, classes.icon)} stroke={1.5}/>
                <IconMoon className={cx(classes.dark, classes.icon)} stroke={1.5}/>
            </ActionIcon>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
