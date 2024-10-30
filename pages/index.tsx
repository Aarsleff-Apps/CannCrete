import Nav from "@/components/Nav/Nav";
import { Container, Grid, NumberInput, Select, rem, Text } from "@mantine/core";
import { IconSelector } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const volumesPerM = {
  "300": Math.PI * ((0.3 / 2) ** 2),
  "330": Math.PI * ((0.33 / 2) ** 2),
  "350": Math.PI * ((0.35 / 2) ** 2),
  "400": Math.PI * ((0.4 / 2) ** 2),
  "408": Math.PI * ((0.408 / 2) ** 2),
  "450": Math.PI * ((0.45 / 2) ** 2),
  "500": Math.PI * ((0.5 / 2) ** 2),
  "508": Math.PI * ((0.508 / 2) ** 2),
  "600": Math.PI * ((0.6 / 2) ** 2),
  "608": Math.PI * ((0.608 / 2) ** 2),
  "650": Math.PI * ((0.65 / 2) ** 2),
  "700": Math.PI * ((0.7 / 2) ** 2),
  "750": Math.PI * ((0.75 / 2) ** 2),
  "800": Math.PI * ((0.8 / 2) ** 2),
  "850": Math.PI * ((0.85 / 2) ** 2),
  "900": Math.PI * ((0.9 / 2) ** 2),
  "950": Math.PI * ((0.95 / 2) ** 2),
  "1000": Math.PI * ((1 / 2) ** 2),
  "1050": Math.PI * ((1.05 / 2) ** 2),
  "1100": Math.PI * ((1.1 / 2) ** 2),
  "1150": Math.PI * ((1.15 / 2) ** 2),
  "1200": Math.PI * ((1.2 / 2) ** 2),
};

export default function Home() {
  const [volPerM, setVolPerM] = useState(0);
  const [calcVol, setCalcVol] = useState(0);
  const [wasteVol, setWasteVol] = useState(0);

  const [metresDrilled, setMetresDrilled] = useState(0);
  const [volDelivered, setVolDelivered] = useState(0);

  useEffect(() => {
    if (volPerM && metresDrilled) {
      setCalcVol(volPerM * metresDrilled);
    }
  }, [volPerM, metresDrilled]);

  useEffect(() => {
    if (calcVol && volDelivered) {
      setWasteVol(volDelivered - calcVol);
    }
  }, [calcVol, volDelivered]);

  return (
    <Nav>
      <Container size="xl">
        <Grid>
          <Grid.Col span={{ base: 12, sm: 3 }} offset={{ sm: 3.001 }}>
            <Select
              label="Pile diameter"
              placeholder="Pick a diameter"
              data={[
                "300",
                "330",
                "350",
                "400",
                "408",
                "450",
                "500",
                "508",
                "600",
                "608",
                "650",
                "700",
                "750",
                "800",
                "850",
                "900",
                "950",
                "1000",
                "1050",
                "1100",
                "1150",
                "1200",
              ]}
              leftSection={
                <IconSelector style={{ width: rem(16), height: rem(16) }} />
              }
              rightSection={<p style={{ paddingRight: rem(10) }}>mm</p>}
              onChange={(value) =>
                value
                  ? setVolPerM(volumesPerM[value as keyof typeof volumesPerM])
                  : 0
              }
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 3 }}>
            <NumberInput
              label="Metres drilled"
              placeholder="Metres drilled"
              rightSection={<p style={{ paddingRight: rem(10) }}>m</p>}
              onChange={(value) => setMetresDrilled(value ? value as number : 0)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 3 }} offset={{ sm: 4.5 }}>
            <Text size="md">Estimated concrete volume: {calcVol.toFixed(2)} m&sup3;</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 3 }} offset={{ sm: 4.5 }}>
            <NumberInput
              label="Volume delivered"
              placeholder="Volume delivered"
              rightSection={<p style={{ paddingRight: rem(10) }}>m&sup3;</p>}
              onChange={(value) => setVolDelivered(value ? value as number : 0)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 3 }} offset={{ sm: 3 }}>
            <Text size="md">Estimated waste volume: {wasteVol.toFixed(2)} m&sup3;</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 3 }}>
            <Text size="md">Estimated waste percentage: {calcVol != 0 ? ((wasteVol / volDelivered) * 100).toFixed(2) : "0.00"}%</Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Nav>
  );
}
