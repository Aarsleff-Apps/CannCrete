import Nav from "@/components/Nav/Nav";
import { Container, Grid, NumberInput, Select, rem, Text } from "@mantine/core";
import { IconSelector } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const volumesPerM = {
  "300": 0.071,
  "330": 0.086,
  "350": 0.096,
  "400": 0.126,
  "408": 0.131,
  "450": 0.159,
  "500": 0.196,
  "508": 0.203,
  "600": 0.283,
  "608": 0.29,
  "650": 0.332,
  "700": 0.385,
  "750": 0.442,
  "800": 0.503,
  "850": 0.567,
  "900": 0.636,
  "950": 0.709,
  "1000": 0.785,
  "1050": 0.866,
  "1100": 0.95,
  "1150": 1.039,
  "1200": 1.131,
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
          <Grid.Col span={{ base: 12, sm: 3 }} offset={{ sm: 3.001}}>
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
          <Grid.Col span={{ base: 12, sm: 3 }} offset={{ sm: 4.5}}>
            <Text size="md">Estimated concrete volume: {calcVol.toFixed(2)} m&sup3;</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 3 }} offset={{ sm: 4.5}}>
            <NumberInput
              label="Volume delivered"
              placeholder="Volume delivered"
              rightSection={<p style={{ paddingRight: rem(10) }}>m&sup3;</p>}
              onChange={(value) => setVolDelivered(value ? value as number : 0)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 3 }} offset={{ sm: 3}}>
            <Text size="md">Estimated waste volume: {wasteVol.toFixed(2)} m&sup3;</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 3 }}>
            <Text size="md">Estimated waste percentage: {calcVol != 0 ? ((wasteVol/calcVol)*100).toFixed(2) : 0}%</Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Nav>
  );
}
