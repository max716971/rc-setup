const STORAGE_KEY = 'rc-setup-v1';
const MAX_SETUP_PHOTOS = 4;
const CAR_CATALOG = [
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Original (1984)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 TQ10 Graphite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Graphite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Championship Edition (1990, pré-Stealth)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Team Car (1990)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Championship Edition (1992, Stealth)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Worlds Car",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 Classic (re-release)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B3 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4 RTR / SE / RS",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4.1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4.1 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4.2 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B4.2 RS",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B5 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B5M Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B5M Factory Lite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B5M Champions Edition",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6 Club Racer",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.1 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.1D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.1 Factory Lite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.1DL Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.2 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B6.2D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B6.3 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B6.3D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B6.4 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B6.4D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B6.4CC Collector's Clear Edition",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B7 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B7D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B7.1 Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B7.1D Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B44 Factory Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B44.1 Factory Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B44.2 Factory Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B44.3 Factory Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B64 Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 B64D Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74 Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74.1 Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74.2 Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74.2D Team",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74.2 CE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10 B74.2D CE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10B84 Team Kit (#90050)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10B84D Team Kit (#90051)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T3 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T4.1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T4.2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10T5M",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10T6",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10T6.1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10T6.2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10T6.3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "RC10T6.4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "SC10B",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Moderne",
    "name": "SC10B RS RTR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.2 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.3 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.4 Factory Team",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "SC10.4 RTR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 4WD Kit (#6040)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Associated",
    "era": "Vintage",
    "name": "RC10 4WD Team Car Kit (#6046)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "CAT XLS",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "CAT 2000 / CAT 3000",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Cougar 2000 / 2001",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Cougar 2 / Cougar 2 Works",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Mission / Mission FT",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Mi2 / Mi2 EC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Mi3 / Mi3.5 / Mi4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Vintage",
    "name": "Fireblade",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Cougar LD2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Cougar Laydown",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Cougar SVR / SV2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "CAT L1 / L1R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "CAT L1 EVO",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Mi6 / Mi6evo / Mi7 / Mi8",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Eclipse 4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "Icon 2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Schumacher",
    "era": "Moderne",
    "name": "STORM ST",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Optima",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Optima Mid",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Turbo Optima",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Ultima",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Ultima Pro / Pro XL",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Scorpion",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Tomahawk",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Javelin",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Turbo Scorpion",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Vintage",
    "name": "Lazer ZX / ZX-R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "MP10",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "MP10e",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "MP10T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "Inferno Neo",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "RB7",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "ZX7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "Ultima RB7.5",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "Fazer Mk2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Kyosho",
    "era": "Moderne",
    "name": "TF7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Graphite Worlds RC10 FR-01",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Graphite Worlds Special Edition Blue FR-01BU",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Composite Worlds RC10 FR-02",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Composite Worlds Carbon Tub FR-02CT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Racer Worlds FR-007",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "Long Arm Worlds Kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "F.A.N. RC",
    "era": "Moderne",
    "name": "JRX2 Graphite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Rough Rider",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Sand Scorcher",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "The Frog",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Hotshot",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Avante",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Astute",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Egress",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Top Force",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Dyna Storm",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Manta Ray",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Wild One",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Vintage",
    "name": "Clod Buster",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TRF201 / TRF201X",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TRF211XM",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TRF501X / TRF511",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TD2 / TD4",
    "scale": "1/10",
    "drive": "2WD / 4WD",
    "type": "Buggy"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TT-01 / TT-02",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TA05 / TA06 / TA07 / TA08",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "TB-04 / TB-05 / TB-07",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "XV-01 / XV-02",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "M-05 / M-06 / M-07 / M-08",
    "scale": "1/10",
    "drive": "2WD",
    "type": "M-Chassis"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "CC-02 / CC-01",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Tamiya",
    "era": "Moderne",
    "name": "GF-01 / G6-01",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "XRAY",
    "era": "Vintage",
    "name": "XB8 (premières générations)",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Vintage",
    "name": "XB808 / XB9",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Vintage",
    "name": "XB4 (premières générations)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Vintage",
    "name": "XB2 (premières générations)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Vintage",
    "name": "T4 (premières générations)",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB8",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB8E",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB8T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XT4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XT2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "X4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "X1",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Formula"
  },
  {
    "brand": "XRAY",
    "era": "Moderne",
    "name": "XB4C",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy Carpet"
  },
  {
    "brand": "PR Racing",
    "era": "Vintage",
    "name": "PR S1 / S1 V2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Vintage",
    "name": "PR SB401 / SB401-LW",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Vintage",
    "name": "PR SB401-R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Moderne",
    "name": "PR S1 V3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Moderne",
    "name": "PR S1 V3 Type R EVO",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Moderne",
    "name": "PR S1 V4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Moderne",
    "name": "PR B10R",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "PR Racing",
    "era": "Moderne",
    "name": "PR SB401-R Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 (rear motor)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 Mid-Motor",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 3.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 4.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 4.0 SR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 5.0 AC",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 5.0 DC",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22 5.0 DC Elite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X AC",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X DC",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X DC Elite",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X-4 2.0 AC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TLR 22X-4 2.0 DC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22T 2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22T 3.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22T 4.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22T Mid-Motor",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22SCT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22SCT 2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "TLR 22SCT 3.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX CR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX BK2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-NT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX-4 Worlds Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCB",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-X",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-X 2.0",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-XE",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-XE 2.0",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-XE 2.0 Elite",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-E 3.0",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-E 4.0",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-XT",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-XTE",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "8IGHT-T 4.0",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22S",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Mini-B",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Mini-T 2.0",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "TENACITY DB Pro",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Desert Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Baja Rey",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Desert Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "LMT",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Lasernut U4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Desert Truck"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 CA",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 CAL2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 CAL3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 CAL3.1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTM",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTM2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTM3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTM3.1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTMW",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-4SF",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-4SF2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-MAX2 MR2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-MAX2 MR3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-MAX2 RS",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-MAX4 III",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "RO1.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "RO2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "SO1.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "SO2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "SO2.0 Dirt Edition",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "SO3.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MO1.0",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MO2.0",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "MO3.0",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "BD7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "BD8",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "BD9",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "BD10",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "BD11",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "BD12",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "BDR",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4BC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-10",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Dog Fighter 870C",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Wonder Dog Fighter",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Super Dog Fighter Works 91",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Works 92",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Works 93 WCS",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YD-2",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YD-2E",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YD-2S",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YD-2Z",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "RD1.0",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "RD2.0",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "SD1.0",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "SD2.0",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "SD3.0",
    "scale": "1/10",
    "drive": "RWD",
    "type": "Drift"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MSB1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MSX1",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-5",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-7",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-7R",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-8",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-8R",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-8 Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-8R Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-9",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-7T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-8T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-8TR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-8T Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-6",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-6",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MTX-7R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTC1",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTC2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MTC3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-5 Squared",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 Squared",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Moderne",
    "name": "X-6 Cubed",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-60",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "X-Factory",
    "era": "Moderne",
    "name": "X-60 CF",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "SCX-60",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "X-Factory",
    "era": "Moderne",
    "name": "SCX-60 CF",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Bandit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Bandit VXL",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Rustler",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Rustler VXL",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Rustler 4X4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Rustler 4X4 VXL",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Stampede",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Stampede VXL",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Stampede 4X4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Stampede 4X4 VXL",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Slash 2WD",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Slash 2WD VXL",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Slash 4X4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Slash 4X4 VXL",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Slash 4X4 Ultimate",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Mudboss Slash",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Bigfoot",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Bigfoot No. 1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Ford F-150 Raptor",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Drag Slash",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Drag"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Jato 4X4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Maxx",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "X-Maxx",
    "scale": "1/7",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "XRT",
    "scale": "1/7",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Summit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "E-Revo 2.0",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Revo 3.3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Sledge",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "TRX-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "TRX-4 Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "TRX-6",
    "scale": "1/10",
    "drive": "6WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "TRX-4M",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Mini Maxx",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Mini XRT",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX Pro",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX Pro SE",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Junior Two",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX Spec",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX CR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX BK (BK1)",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX4",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX4 G+",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCB RTR AVC",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Slider Dirt Oval Kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22 TwentyTwo Kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22 TwentyTwo RTR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22 3.0 Spec-Racer MM",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22 5.0 SR Race Spec",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22S 69 Camaro Drag Car",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "22S No Prep Drag Roller",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22SCT Kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22SCT 2.0 Race",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22SCT 3.0 Race",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten SCTE Race Roller",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten SCTE RTR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten SCTE 2.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten SCTE 3.0",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten SCTE Troy Lee Designs",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten-SCT Nitro",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "ReadyLift XXX-SCT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Rockstar XXX-SCT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Stronghold XXX-SCT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCT Brushless",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCT ReadyLift",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-SCT Rockstar",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22T Kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22T 2.0 Race",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "22T 3.0 Mid-Motor Race",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX-T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX-T CR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T CR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T Matt Francis Special Edition",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T MF2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T Spec",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-T Sport",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX-T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "GTX Nitro",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "NXT Nitro",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Speed-NT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten-T",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX NT",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX NT Sport",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX NT Adam Drake",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX NT Adam Drake 2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX NT RTR II",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "810 Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight RTR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight 2.0 Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight 2.0 Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight 2.0 EU",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight 3.0 Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight 4.0 Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-X Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-X Elite Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T 2.0 Nitro",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T 2.0 Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T 3.0 Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-T 4.0 Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-XT / XTE",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-E Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-E RTR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-E 2.0 Race Roller",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-E 3.0 Kit",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-E 4.0 Kit",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-XE Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "8ight-XE Elite Race",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XX4 CR",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Ten SCTE 2.0 Kit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Ten SCTE 3.0 Kit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity SCTE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity-T Truggy",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity-TT Pro",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity DB",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity DB Pro",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity MT",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Tenacity SCT",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "5ive-B Race",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Desert Buggy XL",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Desert Buggy XL-E",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "DBXL-E 2.0",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "5ive-T",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "5ive-T 2.0",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "5ive-T SCT",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Super Baja Rey",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Super Baja Rey 2.0",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Super Rock Rey",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Comp Crawler Race Roller",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Night Crawler",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Night Crawler 2.0",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Team Losi",
    "era": "Moderne",
    "name": "Night Crawler SE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini LST",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini LST2",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Monster Baja",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Raminator",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Rammunition",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini-Baja",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Desert Truck",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini High-Roller",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini-T",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini-T Pro",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini-T 2.0 Limited Edition",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight-T",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight-T Maifield Edition",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight-T Phend Edition",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Desert Buggy",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Slider Dirt Oval",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Sprint",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight",
    "scale": "1/14",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight Adam Drake Edition",
    "scale": "1/14",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight Dakota Phend Edition",
    "scale": "1/14",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini 8ight DB",
    "scale": "1/14",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini ReadyLift SCT",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Rockstar SCT",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Mini Stronghold SCT",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Micro SCT",
    "scale": "1/24",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Micro SCTE",
    "scale": "1/24",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Micro-T Stadium Truck",
    "scale": "1/32",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Micro Desert Truck",
    "scale": "1/32",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX-S",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "JRX-S Type-R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Street Weapon",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Rally Weapon",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-S",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-S Graphite",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-S Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-S Sport RTR II",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "XXX-S Brushless",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Ten Rally-X",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Drift-R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Team Losi",
    "era": "Vintage",
    "name": "Micro Rally-X",
    "scale": "1/24",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-843B Dog-Fighter",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-843B Wonder Dog-Fighter",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-843B Wonder Dog-Fighter Limited Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-834B Wonder Dog Fighter Special Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-834B RPS Yokomo SE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-870C Super Dog Fighter",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-870C Super Dog Fighter Custom",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-870C Super Dog Fighter WC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Super Dog Fighter Works 92 Spec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Super Dog Fighter Works 93",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "World Championship Special YZ-WCS",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Super Dog Fighter YZ-10",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Super Dog Fighter YZ-10 Mark Pavidis Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max4 Factory",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max4 II",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max4 II World Spec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max4 III",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 MR",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 MR Ver.2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 MR Ver.3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 RS",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 MR2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "B-Max2 MR3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DT Classic",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YZ-2 DTM Worlds Edition",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 GP",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-10 GP",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 SP",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 II",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 II Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 K2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 M",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 MC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 II SP",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 M2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 M2 Type-J",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "YR-4 M2 Type-J Pro USA Racer",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC Pro",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC Worlds Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC Custom",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC Special",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC Special V2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC SD SSG",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC SD BSG",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC SD CGM",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC SD CM",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC SD LCG",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD5P",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD5 World Spec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD5WR",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD5WX",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD7",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD7 RS",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD8",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4TC BD9",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "MR-4TC BD10",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "MR-4TC BD11",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "MR-4TC BD12",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "MR-4TC Mini",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YR-4 Rally",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YR-4 II Compact",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Moderne",
    "name": "YR-4 M2 Type-J Pro",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "D1 Drift Package",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Basic",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Plus",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Plus Type C",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Super Plus",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Super Plus Limited Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Deep Rim Plus",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "D-Max Drift Package",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "D-Max Special Drift Package",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package DRB",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package DRB Hyper Drive Special",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package DIB",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package DPM SSG",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Package Plus Type C Special",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Drift Master",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Drift"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT-4W",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT-4R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT300",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT500",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT500R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT500R SSG",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "GT500R Ver.2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "R12",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "R12W",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "R12-C3",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4 Rally",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4BX",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "MR-4BX World Spec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "Hot Dog 4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "SD12 TR",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "SD12 TV",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Yokomo",
    "era": "Vintage",
    "name": "CL Challenger 1.9",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Bulldog",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Bulldog II",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "2WD Sport",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "4WD Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Super Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Sport Seven",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Athlete",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Super Athlete",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-4 RR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-4 XR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-4 XR Works",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-5 Prospec",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-5R",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6 M-Spec",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6R EU",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6R US",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-7 M-Spec",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-6 Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-6E M-Spec Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-7R Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX8R World Edition",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX8 ECO",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX8 ECO T.E.",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX8R ECO",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX8R ECO T.E.",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Moderne",
    "name": "MBX-10",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-5T",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-5T Prospec",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6T M-Spec",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6TR",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-6T Eco",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MBX-8TR ECO",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Truggy"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-2",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-3",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-4",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-4R",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-4X",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-6R",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MRX-6X",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Piste"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-2",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-2 Prospec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MTX-4R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MSX-3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "K2-X Advance",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "MST-1",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "K2-X Cosmic",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "K2-X Cosmic GP/m",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Mugen Seiki",
    "era": "Vintage",
    "name": "Prime 12",
    "scale": "1/12",
    "drive": "4WD",
    "type": "Pan Car"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Bullet TRX-10",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Radicator",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "RAD-2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "The Cat",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Street Cat",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Tom-Cat",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TCP",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-3",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Wildcat 4x4",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Buggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Hawk",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Hawk-2",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Blue Eagle",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Blue Eagle LS",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "LS-II",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Rustler XL-5",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Rustler XL-1",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "4-Tec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "4-Tec XL-1",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "4-Tec 2.0 VXL",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "4-Tec 2.0 XL-5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Corvette Stingray 4-Tec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Ford GT 4-Tec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Ford Mustang GT 4-Tec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Hot Rod 1933 Coupe 4-Tec",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Street Sport",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Fiero GTP",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Rally",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Ford Fiesta ST Rally",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "VR46 Ford Fiesta ST Rally SE",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Ford Fiesta",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Ken Block Gymkhana Fiesta",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Rally VXL",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Ford Mustang Boss 302",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Ford Mustang Boss 302 Brushless",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "LaTrax Rally",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Rally"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "XO-1",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Funny Car",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Funny Car SE TSM",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Touring"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Ford F-150 SVT Raptor",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Nitro Stampede",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Stampede XL-5",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Hoss 4X4 VXL",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "T-Maxx",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "T-Maxx 2.5",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "T-Maxx 2.5R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "T-Maxx 3.3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "T-Maxx Classic",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Revo 2.5R",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Revo Platinum Edition",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "E-Revo",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Sportmaxx",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Sledge 6S",
    "scale": "1/8",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Unlimited Desert Racer",
    "scale": "1/7",
    "drive": "4WD",
    "type": "Desert Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Udr",
    "scale": "1/7",
    "drive": "4WD",
    "type": "Desert Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "X-Maxx Ultimate",
    "scale": "1/5",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Chevrolet K5 Blazer",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Ford Bronco",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Land Rover Defender",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Tactical Unit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Equipped with Traxx",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Chassis Kit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-4 Sport Kit",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "TRX-6 Mercedes-Benz G 63 AMG 6x6",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Crawler"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 2WD XL-5",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 2WD LCG",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash Mudboss",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 4X4 Platinum",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 4X4 BL-2s",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 4X4 Brushless",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 4X4 Fox",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Slash 4X4 Raptor",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Short Course"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "22S No Prep Drag Car",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Drag"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 E-Revo VXL",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "1/16 Summit",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "LaTrax Teton",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "LaTrax Prerunner",
    "scale": "1/18",
    "drive": "4WD",
    "type": "Monster Truck"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Mini Revo",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Traxxas",
    "era": "Vintage",
    "name": "Mini Slash 4X4",
    "scale": "1/16",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "Traxxas",
    "era": "Moderne",
    "name": "Jato 3.3",
    "scale": "1/10",
    "drive": "4WD",
    "type": "Truck / Truggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 original",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 Squared carbon chassis",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 Squared plastic chassis",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 Cubed CF",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6S",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-6 conversion kit",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Buggy"
  },
  {
    "brand": "X-Factory",
    "era": "Vintage",
    "name": "X-60 original",
    "scale": "1/10",
    "drive": "2WD",
    "type": "Stadium Truck"
  }
];
const MAX_PHOTO_BYTES = 12 * 1024 * 1024;
const SETUP_FIELDS = [
  'sessionDate', 'temperature', 'weather', 'surface', 'grip', 'goal', 'sessionNotes', 'tiresNotes', 'suspensionNotes', 'transmissionNotes', 'frontBallastWeight', 'rearBallastWeight', 'lateralBallastWeight', 'escSectionNotes', 'radioSectionNotes', 'radioEquipmentNotes',
  'frontTires', 'rearTires', 'inserts', 'frontInserts', 'rearInserts', 'tireTreatment', 'tireCondition',
  'frontShocks', 'frontPiston', 'frontSpring', 'frontShockCupPosition', 'rearShocks', 'rearPiston', 'rearSpring', 'rearShockCupPosition', 'springs', 'frontRideHeight', 'rearRideHeight', 'rideHeight', 'frontCamber', 'rearCamber', 'frontToe', 'rearToe', 'frontCaster', 'ackermann', 'frontAntiRollBar', 'rearAntiRollBar', 'frontDroop', 'rearDroop', 'camber', 'toe', 'casterAckermann', 'antiRollBars', 'droop', 'stopsDiaphragms', 'photoNotes', 'frontShockTower', 'rearShockTower', 'frontShockPosition', 'rearShockPosition', 'frontArmPosition', 'rearArmPosition', 'frontTrackWidth', 'rearTrackWidth', 'frontLinkLength', 'rearLinkLength',
  'gearing', 'pinionTeeth', 'spurTeeth', 'diffType', 'diffGearOil', 'diffBallGrease', 'differentials', 'frontDiffType', 'centerDiffType', 'rearDiffType', 'frontDiffOil', 'centerDiffOil', 'rearDiffOil', 'frontDiffGrease', 'centerDiffGrease', 'rearDiffGrease', 'frontBallDiffTightness', 'centerBallDiffTightness', 'rearBallDiffTightness', 'slipperPresence', 'slipper', 'ballDiff', 'motor', 'esc', 'servoSteering', 'brakes', 'radio',
  'escModel', 'escMode', 'escMotorTiming', 'escBoost', 'escTurbo', 'escTurboDelay', 'escTiming', 'escPunch', 'escBrake', 'escDragBrake', 'escBrakeFrequency', 'escThrottleFrequency', 'escNeutralRange', 'escCutoff', 'escBec', 'escThermal', 'escReverse', 'escBrakeRate', 'escThrottleRate', 'electronicsNotes', 'esc', 'radio', 'radioSteeringDualRate', 'radioSteeringExpo', 'radioEPA', 'radioSteeringTrim', 'radioSubtrim', 'radioSteeringReverse', 'radioThrottleExpo', 'radioThrottleEPA', 'radioThrottleTrim', 'radioThrottleReverse', 'radioBrakeEPA', 'radioBrakeExpo', 'radioFailsafe', 'radioTrim', 'txModel', 'rxModel', 'lapTime', 'rating', 'notes', 'runLaps', 'averageLapTime', 'lapConsistency', 'cornerEntry', 'cornerMid', 'cornerExit', 'tractionLevel', 'stabilityLevel', 'testedChanges', 'testConclusion', 'nextTest'
];

const state = loadState();
const installButton = document.getElementById('installButton');
let deferredPrompt = null;
let toastTimer;
let pendingPhotos = [];
let pendingCarPhotos = [];
let editingCarId = null;
let editingSetupId = null;
let editingTrackId = null;
let setupDraftSource = null;
let skipSetupReset = false;
const emptyStateTemplate = document.getElementById('emptyStateTemplate');

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      cars: Array.isArray(saved.cars) ? saved.cars : [],
      tracks: Array.isArray(saved.tracks) ? saved.tracks : [],
      setups: Array.isArray(saved.setups) ? saved.setups : [],
      maintenance: Array.isArray(saved.maintenance) ? saved.maintenance : [],
      batteries: Array.isArray(saved.batteries) ? saved.batteries : []
    };
  } catch (error) {
    console.error('Impossible de lire les données locales', error);
    return { cars: [], tracks: [], setups: [], maintenance: [], batteries: [] };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event('rc-setup-data-changed'));
    return true;
  } catch (error) {
    console.error('Impossible de sauvegarder les données locales', error);
    showToast('Stockage plein. Retire des photos ou exporte tes données.');
    return false;
  }
}

function uid(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`; }
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[character]);
}
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3000);
}
function getCarById(id) { return state.cars.find((car) => car.id === id); }
function getTrackById(id) { return state.tracks.find((track) => track.id === id); }
function setView(viewName, shouldScroll = true) {
  document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('active', button.dataset.view === viewName));
  document.querySelectorAll('.view').forEach((view) => view.classList.toggle('active', view.id === `${viewName}View`));
  if(viewName==='tools'){populateMaintenanceCars();}
  if (shouldScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
}
function emptyState() { return emptyStateTemplate.content.cloneNode(true); }

function renderDashboard() {
  document.getElementById('carCount').textContent = state.cars.length;
  document.getElementById('trackCount').textContent = state.tracks.length;
  document.getElementById('setupCount').textContent = state.setups.length;
  const container = document.getElementById('recentSetups');
  container.replaceChildren();
  const recent = [...state.setups].sort((a,b)=>new Date(b.updatedAt||b.createdAt||0)-new Date(a.updatedAt||a.createdAt||0)).slice(0,4);
  if (!recent.length) container.append(emptyState());
  recent.forEach(setup => {
    const car=getCarById(setup.carId),track=getTrackById(setup.trackId),item=document.createElement('article');
    item.className='list-item setup-list-item';
    item.innerHTML=`<div class="item-avatar">⚙</div><div class="item-main"><h3>${escapeHtml(setup.setupName||car?.name||'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name||'Piste inconnue')}</h3><p class="item-sub">${escapeHtml(setup.weather||'Conditions non renseignées')} · ${escapeHtml(setup.temperature||'Température —')}</p></div><button class="icon-button view-setup" data-id="${escapeHtml(setup.id)}" aria-label="Voir le setup" type="button">↗</button>`;
    container.append(item);
  });
  container.querySelectorAll('.view-setup').forEach(button=>button.addEventListener('click',()=>showSetup(button.dataset.id)));
  renderPerformanceTrend();
}

function carEquipmentMarkup(car) {
  const fields=[['Moteur','engineEquipment'],['Variateur / ESC','escEquipment'],['Servo','servoEquipment']];
  const setups=state.setups.filter(setup=>setup.carId===car.id).sort((a,b)=>new Date(b.updatedAt||b.createdAt||0)-new Date(a.updatedAt||a.createdAt||0));
  const history=Array.isArray(car.partsHistory)?[...car.partsHistory].sort((a,b)=>String(b.date||'').localeCompare(String(a.date||''))):[];
  const photos=Array.isArray(car.photos)?car.photos.slice(0,3):[];
  return `<div class="car-detail-grid"><section><h4>Équipements</h4><dl class="car-equipment-list">${fields.map(([label,key])=>`<div><dt>${label}</dt><dd>${escapeHtml(car[key]||'Non renseigné')}</dd></div>`).join('')}</dl><p class="item-sub">${escapeHtml(car.type||'Type non renseigné')} · ${escapeHtml(car.scale||'Échelle non renseignée')} · ${escapeHtml(car.drive||'Transmission non renseignée')}</p></section><section><h4>Setups associés (${setups.length})</h4>${setups.length? `<ul class="car-setup-links">${setups.map(setup=>`<li><button type="button" class="text-button open-car-setup" data-id="${escapeHtml(setup.id)}">${escapeHtml(setup.setupName||setup.sessionDate||'Setup')} — ${escapeHtml(getTrackById(setup.trackId)?.name||'Piste non renseignée')}</button></li>`).join('')}</ul>`:'<p class="item-sub">Aucun setup associé pour le moment.</p>'}</section></div><section class="car-detail-section"><h4>Photos de la voiture (${photos.length}/3)</h4>${photos.length?`<div class="car-detail-photos">${photos.map((photo,index)=>`<a href="${photo}" target="_blank" rel="noopener"><img src="${photo}" alt="Photo ${index+1} de ${escapeHtml(car.name)}" loading="lazy"></a>`).join('')}</div>`:'<p class="item-sub">Ajoute jusqu’à trois photos depuis Modifier.</p>'}</section><section class="car-detail-section"><h4>Historique</h4><p class="item-sub">Voiture créée le ${escapeHtml(formatDate(car.createdAt))}</p>${history.length?'<ol class="car-parts-history">'+history.map(entry=>'<li><strong>'+escapeHtml(entry.action||'Événement')+'</strong><span>'+escapeHtml(entry.date||'Date inconnue')+'</span>'+(entry.notes||entry.part?'<p>'+escapeHtml(entry.notes||entry.part)+'</p>':'')+'</li>').join('')+'</ol>':'<p class="item-sub">Aucun autre événement enregistré.</p>'}</section></div>`;
}
function renderCars() {
  const container = document.getElementById('carsList');
  container.replaceChildren();
  if (!state.cars.length) { container.append(emptyState()); return; }
  state.cars.forEach((car) => {
    const item = document.createElement('article');
    item.className = 'list-item entity-card car-entity-card';
    const setups=state.setups.filter(setup=>setup.carId===car.id).length;
    const itemType=car.type?escapeHtml(car.type):'Type non renseigné';
    const firstPhoto=Array.isArray(car.photos)&&car.photos[0]?car.photos[0]:'';
    item.innerHTML = `<div class="${firstPhoto?'car-avatar-photo':'item-avatar car-avatar'}">${firstPhoto?`<img src="${escapeHtml(firstPhoto)}" alt="Photo de ${escapeHtml(car.name)}" loading="lazy">`:'🚗'}</div><div class="item-main"><h3>${escapeHtml(car.name)}</h3><p class="item-sub">${escapeHtml(car.brand || 'Marque / modèle non renseigné')} · ${escapeHtml(car.scale || 'Échelle non renseignée')} · ${escapeHtml(car.drive || 'Transmission non renseignée')} · ${itemType}</p><p class="item-detail">Créée le ${escapeHtml(formatDate(car.createdAt))} · ${setups} setup(s) associé(s) · ${Array.isArray(car.photos)?Math.min(3,car.photos.length):0}/3 photos</p>${car.notes ? `<p class="item-detail">${escapeHtml(car.notes)}</p>` : ''}<div class="car-card-actions"><button class="button button-soft view-car-details" data-id="${escapeHtml(car.id)}" type="button" aria-expanded="false">Fiche détaillée</button><button class="button button-soft edit-car" data-id="${escapeHtml(car.id)}" type="button">Modifier</button><button class="button button-quiet danger-action delete-car" data-id="${escapeHtml(car.id)}" type="button">Supprimer</button></div><div class="car-detail-panel hidden" id="car-detail-${escapeHtml(car.id)}">${carEquipmentMarkup(car)}</div></div>`;
    container.append(item);
  });
  container.querySelectorAll('.delete-car').forEach((button) => button.addEventListener('click', () => removeCar(button.dataset.id)));
  container.querySelectorAll('.edit-car').forEach((button) => button.addEventListener('click', () => openCarEditor(button.dataset.id)));
  container.querySelectorAll('.view-car-details').forEach(button=>button.addEventListener('click',()=>{
    const panel=document.getElementById('car-detail-'+button.dataset.id);if(!panel)return;
    const opening=panel.classList.contains('hidden');panel.classList.toggle('hidden',!opening);button.setAttribute('aria-expanded',String(opening));button.textContent=opening?'Masquer la fiche':'Fiche détaillée';
  }));
  container.querySelectorAll('.open-car-setup').forEach(button=>button.addEventListener('click',()=>showSetup(button.dataset.id)));
}

function renderTracks() {
  const container = document.getElementById('tracksList');
  container.replaceChildren();
  if (!state.tracks.length) { container.append(emptyState()); return; }
  state.tracks.forEach((track) => {
    const item = document.createElement('article');
    item.className = 'list-item entity-card track-entity-card';
    item.innerHTML = `<div class="item-avatar track-avatar">🏁</div><div class="item-main"><h3>${escapeHtml(track.name)}</h3><p class="item-sub">${escapeHtml(track.surface || 'Surface non renseignée')} ${track.grip ? `· Adhérence ${escapeHtml(track.grip)}` : ''} ${track.type ? `· ${escapeHtml(track.type)}` : ''} ${track.location ? `· ${escapeHtml(track.location)}` : ''}</p>${track.details ? `<p class="item-detail">${escapeHtml(track.details)}</p>` : ''}</div><div class="item-actions"><button class="button button-soft edit-track" data-id="${escapeHtml(track.id)}" type="button">Modifier</button><button class="icon-button danger-action delete-track" data-id="${escapeHtml(track.id)}" aria-label="Supprimer ${escapeHtml(track.name)}" type="button">×</button></div>`;
    container.append(item);
  });
  container.querySelectorAll('.edit-track').forEach((button) => button.addEventListener('click', () => openTrackEditor(button.dataset.id)));
  container.querySelectorAll('.delete-track').forEach((button) => button.addEventListener('click', () => removeTrack(button.dataset.id)));
}

function renderSetups() {
  const container=document.getElementById('setupsList');container.replaceChildren();
  updateSetupFilterOptions();updateComparisonOptions();
  const query=(document.getElementById('setupSearch')?.value||'').trim().toLocaleLowerCase('fr');
  const carFilter=document.getElementById('setupCarFilter')?.value||'',trackFilter=document.getElementById('setupTrackFilter')?.value||'';
  const surfaceFilter=document.getElementById('setupSurfaceFilter')?.value||'',gripFilter=document.getElementById('setupGripFilter')?.value||'';
  const from=document.getElementById('setupDateFrom')?.value||'',to=document.getElementById('setupDateTo')?.value||'';
  const filtered=[...state.setups].filter(setup=>{
    const car=getCarById(setup.carId),track=getTrackById(setup.trackId),date=setup.sessionDate||String(setup.createdAt||'').slice(0,10);
    const effectiveSurface=setup.surface||track?.surface||'',effectiveGrip=setup.grip||track?.grip||'';
     const hay=[car?.name,track?.name,effectiveSurface,effectiveGrip,setup.weather,setup.goal,setup.notes,setup.frontTires,setup.rearTires,setup.testedChanges,setup.testConclusion,setup.nextTest].join(' ').toLocaleLowerCase('fr');
    return (!query||hay.includes(query))&&(!carFilter||setup.carId===carFilter)&&(!trackFilter||setup.trackId===trackFilter)&&(!surfaceFilter||effectiveSurface===surfaceFilter)&&(!gripFilter||effectiveGrip===gripFilter)&&(!from||date>=from)&&(!to||date<=to);
  }).sort((a,b)=>Number(Boolean(b.favorite))-Number(Boolean(a.favorite))||new Date(b.updatedAt||b.createdAt||0)-new Date(a.updatedAt||a.createdAt||0));
  if(!filtered.length){const empty=emptyState();empty.querySelector('span:last-child').textContent=state.setups.length?'Aucun setup ne correspond à ces filtres.':'Ajoute une première fiche pour commencer.';container.append(empty);return;}
  filtered.forEach(setup=>{
    const car=getCarById(setup.carId),track=getTrackById(setup.trackId),item=document.createElement('article');
    item.className='list-item setup-card';
    item.innerHTML=`<div class="setup-card-top"><span class="setup-tag">${setup.favorite?'★ FAVORI':'SETUP'}</span><span class="setup-date">${escapeHtml(setup.sessionDate||formatDate(setup.createdAt))}</span></div><div class="item-main"><h3>${escapeHtml(setup.setupName||car?.name||'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name||'Piste inconnue')}</h3><p class="item-sub">${escapeHtml(car?.name||'')} · ${escapeHtml(setup.surface||track?.surface||'Surface non renseignée')} · ${escapeHtml(setup.grip||track?.grip||'Adhérence non renseignée')}</p></div>${setup.photos?.length?`<div class="setup-photo-strip">${setup.photos.slice(0,3).map(photo=>`<img src="${photo}" alt="Photo du setup" loading="lazy">`).join('')}<span>${setup.photos.length} photo(s)</span></div>`:''}<div class="setup-chips">${setup.frontTires||setup.rearTires?`<span>Pneus · ${escapeHtml(setup.frontTires||'—')} / ${escapeHtml(setup.rearTires||'—')}</span>`:''}${setup.lapTime?`<span>⏱ ${escapeHtml(setup.lapTime)}</span>`:''}${setup.rating?`<span>${escapeHtml(setup.rating)}</span>`:''}<span>${(setup.history||[]).length} modification(s)</span></div><div class="item-actions"><button class="button button-soft view-setup" data-id="${escapeHtml(setup.id)}" type="button">Détails</button><button class="button button-soft edit-setup" data-id="${escapeHtml(setup.id)}" type="button">Modifier</button><button class="button button-soft duplicate-setup" data-id="${escapeHtml(setup.id)}" type="button">Dupliquer</button><button class="button button-primary print-setup" data-id="${escapeHtml(setup.id)}" type="button">⇩ PDF</button><button class="button button-quiet favorite-setup" data-id="${escapeHtml(setup.id)}" type="button">${setup.favorite?'★':'☆'}</button><button class="button button-quiet danger-action delete-setup" data-id="${escapeHtml(setup.id)}" type="button">Supprimer</button></div>`;
    container.append(item);
  });
  container.querySelectorAll('.view-setup').forEach(b=>b.addEventListener('click',()=>showSetup(b.dataset.id)));
  container.querySelectorAll('.edit-setup').forEach(b=>b.addEventListener('click',()=>openSetupEditor(b.dataset.id)));
  container.querySelectorAll('.duplicate-setup').forEach(b=>b.addEventListener('click',()=>openSetupEditor(b.dataset.id,true)));
  container.querySelectorAll('.print-setup').forEach(b=>b.addEventListener('click',()=>{showSetup(b.dataset.id);printSetupDetails();}));
  container.querySelectorAll('.favorite-setup').forEach(b=>b.addEventListener('click',()=>toggleSetupFavorite(b.dataset.id)));
  container.querySelectorAll('.delete-setup').forEach(b=>b.addEventListener('click',()=>removeSetup(b.dataset.id)));
}

function updateSetupFilterOptions(){
  const fill=(id,items,key,label,first)=>{const el=document.getElementById(id);if(!el)return;const current=el.value;el.innerHTML=`<option value="">${first}</option>`+items.map(x=>`<option value="${escapeHtml(x[key])}">${escapeHtml(label(x))}</option>`).join('');if(items.some(x=>String(x[key])===current))el.value=current;};
  fill('setupCarFilter',state.cars,'id',x=>x.name,'Toutes les voitures');fill('setupTrackFilter',state.tracks,'id',x=>x.name,'Toutes les pistes');
  const surfaces=[...new Set([...state.tracks.map(t=>t.surface),...state.setups.map(s=>s.surface)].filter(Boolean))].sort((a,b)=>a.localeCompare(b,'fr')),el=document.getElementById('setupSurfaceFilter');
  if(el){const current=el.value;el.innerHTML='<option value="">Toutes les surfaces</option>'+surfaces.map(s=>`<option>${escapeHtml(s)}</option>`).join('');if(surfaces.includes(current))el.value=current;}
   const gripEl=document.getElementById('setupGripFilter');if(gripEl){const current=gripEl.value;const grips=[...new Set([...state.tracks.map(t=>t.grip),...state.setups.map(s=>s.grip)].filter(Boolean))].sort((a,b)=>a.localeCompare(b,'fr'));gripEl.innerHTML='<option value="">Toutes les adhérences</option>'+grips.map(g=>`<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`).join('');if(grips.includes(current))gripEl.value=current;}
}
function updateComparisonOptions(){
  ['compareSetupA','compareSetupB'].forEach(id=>{const el=document.getElementById(id);if(!el)return;const current=el.value;el.innerHTML='<option value="">Choisir un setup…</option>'+state.setups.map(s=>{const car=getCarById(s.carId),track=getTrackById(s.trackId);return `<option value="${escapeHtml(s.id)}">${escapeHtml(s.setupName||car?.name||'Voiture')} — ${escapeHtml(track?.name||'Piste')} — ${escapeHtml(s.sessionDate||formatDate(s.createdAt))}</option>`;}).join('');if(state.setups.some(s=>s.id===current))el.value=current;});
}
function toggleSetupFavorite(id){const setup=state.setups.find(s=>s.id===id);if(!setup)return;const previous={...setup};setup.favorite=!setup.favorite;setup.updatedAt=new Date().toISOString();if(saveState()){renderAll();showToast(setup.favorite?'Ajouté aux favoris.':'Retiré des favoris.');}else Object.assign(setup,previous);}
function restoreSetupVersion(setupId,historyIndex){
  const index=state.setups.findIndex(s=>s.id===setupId);if(index<0)return;
  const current=state.setups[index],history=[...(current.history||[])],entry=history[historyIndex];
  if(!entry?.data||!confirm('Restaurer cette ancienne version ? La configuration actuelle sera conservée dans l’historique.'))return;
  const now=new Date().toISOString();
  history.push({savedAt:now,data:{...current,photos:[...(current.photos||[])],history:[]}});
  state.setups[index]={...entry.data,id:current.id,createdAt:current.createdAt,updatedAt:now,history:history.slice(-20)};
  if(saveState()){const dialog=document.getElementById('setupDialog');if(dialog.open)dialog.close();renderAll();showSetup(setupId);showToast('Ancienne version restaurée.');}else state.setups[index]=current;
}

function openSetupEditor(id,duplicate=false){
  const source=state.setups.find(s=>s.id===id);if(!source)return;const form=document.getElementById('setupForm');skipSetupReset=true;form.dataset.preserveOnReset='true';form.reset();
  editingSetupId=duplicate?null:id;setupDraftSource=duplicate?source:null;
  for(const name of ['carId','trackId',...SETUP_FIELDS]){const field=form.elements.namedItem(name);if(field)field.value=source[name]??'';}
  form.elements.namedItem('setupName').value=duplicate?`${source.setupName||getCarById(source.carId)?.name||'Setup'} — copie`:(source.setupName||'');
  pendingPhotos=[...(source.photos||[])];renderPhotoPreviews();form.querySelector('button[type="submit"]').textContent=duplicate?'Enregistrer la copie':'Enregistrer les modifications';
  form.classList.remove('hidden');setView('setups');form.scrollIntoView({behavior:'smooth',block:'start'});updateVehicleSpecificFields();showToast(duplicate?'Copie préparée : modifie-la puis enregistre.':'Modification du setup.');
}
function updateVehicleSpecificFields(){
  const form=document.getElementById('setupForm'),car=getCarById(form.elements.namedItem('carId')?.value);
  const count=car?getCarDifferentialCount(car):0;
  const available=count===1?['rear']:count===2?['front','rear']:count===3?['front','center','rear']:[];
  ['front','center','rear'].forEach(position=>{
    const card=form.querySelector('.transmission-diff-'+position);
    const enabled=available.includes(position);
    if(card)card.classList.toggle('vehicle-field-hidden',!enabled);
    const typeField=form.elements.namedItem(position+'DiffType');
    if(!enabled&&typeField)typeField.value='Absent';
    const type=String(typeField?.value||'').toLowerCase();
    form.querySelectorAll('.'+position+'-diff-gear-field').forEach(label=>label.classList.toggle('vehicle-field-hidden',type!=='à pignons'));
    form.querySelectorAll('.'+position+'-diff-ball-field').forEach(label=>label.classList.toggle('vehicle-field-hidden',type!=='à billes'));
  });
  const slipperPresence=String(form.elements.namedItem('slipperPresence')?.value||'').toLowerCase();
  form.querySelectorAll('.slipper-setting-field').forEach(label=>label.classList.toggle('vehicle-field-hidden',slipperPresence!=='présent'));
  const hint=document.getElementById('vehicleSetupHint');
  if(hint)hint.textContent=car?[car.brand||'',car.name,car.drive||'architecture non précisée'].filter(Boolean).join(' · ')+' · '+count+' différentiel'+(count>1?'s':'')+' configuré'+(count>1?'s':'')+'. Modifiable dans le Garage.':'Sélectionne une voiture pour afficher ses différentiels.';
}
function parseLapTime(value){const text=String(value||'').trim().replace(',','.');if(!text)return null;if(text.includes(':')){const p=text.split(':');if(p.length!==2)return null;const minutes=Number(p[0]),seconds=Number(p[1]);if(!Number.isInteger(minutes)||minutes<0||!Number.isFinite(seconds)||seconds<0||seconds>=60)return null;const total=minutes*60+seconds;return total>0?total:null;}const n=Number(text);return Number.isFinite(n)&&n>0?n:null;}
function renderPerformanceTrend(){
  const root=document.getElementById('performanceTrend');if(!root)return;
  const selectedTrack=document.getElementById('performanceTrackFilter')?.value||'';
  const tracks=[...new Map(state.setups.filter(s=>s.trackId&&getTrackById(s.trackId)).map(s=>[s.trackId,getTrackById(s.trackId)])).values()].sort((a,b)=>a.name.localeCompare(b.name,'fr'));
  const options='<option value="">Toutes les pistes</option>'+tracks.map(track=>`<option value="${escapeHtml(track.id)}" ${track.id===selectedTrack?'selected':''}>${escapeHtml(track.name)}</option>`).join('');
  const samples=state.setups.filter(s=>parseLapTime(s.lapTime)!==null&&(!selectedTrack||s.trackId===selectedTrack)).sort((a,b)=>new Date(a.sessionDate||a.createdAt)-new Date(b.sessionDate||b.createdAt)).slice(-10);
  if(!samples.length){root.innerHTML='<label class="trend-filter-label" for="performanceTrackFilter">Piste<select id="performanceTrackFilter">'+options+'</select></label><p class="item-sub">'+(selectedTrack?'Aucun chrono enregistré sur cette piste.':'Renseigne un meilleur temps dans tes setups pour afficher leur évolution.')+'</p>';return;}
  const values=samples.map(s=>parseLapTime(s.lapTime)),best=Math.min(...values),worst=Math.max(...values);
  root.innerHTML='<label class="trend-filter-label" for="performanceTrackFilter">Piste<select id="performanceTrackFilter">'+options+'</select></label><div class="trend-chart">'+samples.map((s,i)=>{const v=values[i],height=worst===best?75:Math.max(18,Math.round(100-(v-best)/(worst-best)*72));return `<div class="trend-column" title="${escapeHtml(getCarById(s.carId)?.name||'Voiture')} · ${escapeHtml(s.setupName||'Setup sans nom')} · ${escapeHtml(s.lapTime)}"><span>${escapeHtml(s.lapTime)}</span><i style="height:${height}%"></i><small>${escapeHtml((s.sessionDate||s.createdAt||'').slice(0,10))}</small></div>`;}).join('')+'</div><div class="trend-details">'+samples.slice().reverse().map(s=>`<div class="trend-detail-row"><span><strong>${escapeHtml(s.setupName||'Setup sans nom')}</strong><small>${escapeHtml(getTrackById(s.trackId)?.name||'Piste non renseignée')} · ${escapeHtml((s.sessionDate||s.createdAt||'').slice(0,10))}</small></span><strong>${escapeHtml(s.lapTime)}</strong></div>`).join('')+'</div><p class="item-sub">Meilleur temps enregistré : <strong>'+escapeHtml(samples[values.indexOf(best)].lapTime)+'</strong> · '+samples.length+' sessions affichées</p>';
  root.querySelector('#performanceTrackFilter')?.addEventListener('change',renderPerformanceTrend);
}
function printSetupDetails(){
  const source=document.getElementById('setupDetails');
  if(!source)return;
  const printable=source.cloneNode(true);
  printable.querySelectorAll('img').forEach(image=>image.loading='eager');
  printable.querySelectorAll('.item-actions,.restore-version,.button,.toast,.pdf-action-banner').forEach(node=>node.remove());
  const heading=printable.querySelector('h2')?.textContent?.trim()||'Fiche RC SETUP';
  const subtitle=printable.querySelector('.dialog-subtitle')?.textContent?.trim()||'Fiche de réglages et de suivi';
  const isComparison=printable.querySelector('.kicker')?.textContent?.includes('COMPARAISON');
  const sections=[...printable.querySelectorAll('.detail-group')];
  const sectionCount=sections.length;
  const filledCount=sections.reduce((sum,section)=>sum+section.querySelectorAll('dl>div,.compare-row:not(.compare-head)').length,0);
  const dateLabel=new Date().toLocaleDateString('fr-FR',{day:'2-digit',month:'long',year:'numeric'});
  const meta=subtitle.split('·').map(value=>value.trim()).filter(Boolean);
  const sectionMarkup=sections.map((section,index)=>{
    const clone=section.cloneNode(true);
    // Ne pas retrier les champs : la fiche Setup définit déjà l'ordre exact.
    // Les six paramètres avant restent groupés, puis les six paramètres arrière.
    clone.classList.add('print-section');
    clone.dataset.section=String(index+1).padStart(2,'0');
    if(clone.querySelector('.setup-gallery'))clone.classList.add('print-photo-section');
    return clone.outerHTML;
  }).join('');
  const setupForPrint=isComparison?null:state.setups.find(item=>item.id===currentDetailSetupId);
  const geoFields=[
    ['Carrossage avant',setupForPrint?.frontCamber],['Carrossage arrière',setupForPrint?.rearCamber],
    ['Pincement / ouverture avant',setupForPrint?.frontToe],['Pincement / ouverture arrière',setupForPrint?.rearToe],
    ['Largeur de voie avant',setupForPrint?.frontTrackWidth?setupForPrint.frontTrackWidth+' mm':''],['Largeur de voie arrière',setupForPrint?.rearTrackWidth?setupForPrint.rearTrackWidth+' mm':''],
    ['Chasse avant',setupForPrint?.frontCaster],['Ackermann',setupForPrint?.ackermann],
    ['Amortisseurs avant · tour',setupForPrint?.frontShockTower],['Amortisseurs avant · triangle',setupForPrint?.frontShockPosition],
    ['Amortisseurs arrière · tour',setupForPrint?.rearShockTower],['Amortisseurs arrière · triangle',setupForPrint?.rearShockPosition],
    ['Biellette avant · longueur',setupForPrint?.frontLinkLength?setupForPrint.frontLinkLength+' mm':''],['Biellette arrière · longueur',setupForPrint?.rearLinkLength?setupForPrint.rearLinkLength+' mm':''],
    ['Biellette / triangle avant · position',setupForPrint?.frontArmPosition],['Biellette / triangle arrière · position',setupForPrint?.rearArmPosition]
  ];
  const geoRows=geoFields.filter(([,value])=>value!==undefined&&value!==null&&String(value).trim()!=='').map(([label,value])=>'<div><dt>'+escapeHtml(label)+'</dt><dd>'+escapeHtml(value)+'</dd></div>').join('');
  const geometryPageMarkup=setupForPrint?'<section class="print-geometry-page"><div class="print-page-heading"><span>RC SETUP / DOSSIER TECHNIQUE</span><strong>03 / GÉOMÉTRIE & IMPLANTATION</strong></div><h2>Fiche technique · Géométrie & implantation</h2><div class="print-geometry-layout"><div class="print-geometry-diagram"><svg viewBox="0 0 320 440" role="img" aria-label="Schéma de buggy vu de dessus"><path d="M160 28 L205 65 L220 130 L210 185 L205 270 L225 350 L200 397 L120 397 L95 350 L115 270 L110 185 L100 130 L115 65 Z" fill="#edf1f4" stroke="#526171" stroke-width="3"/><path d="M120 90 L200 90 M112 330 L208 330" stroke="#c8202f" stroke-width="6" stroke-linecap="round"/><path d="M130 100 L190 100 L205 135 L115 135 Z M120 300 L200 300 L190 340 L130 340 Z" fill="#d8e0e7" stroke="#526171" stroke-width="2"/><rect x="83" y="75" width="28" height="76" rx="9" fill="#273340" stroke="#526171" stroke-width="3" transform="rotate(-12 97 113)"/><rect x="209" y="75" width="28" height="76" rx="9" fill="#273340" stroke="#526171" stroke-width="3" transform="rotate(12 223 113)"/><rect x="83" y="290" width="28" height="76" rx="9" fill="#273340" stroke="#526171" stroke-width="3" transform="rotate(12 97 328)"/><rect x="209" y="290" width="28" height="76" rx="9" fill="#273340" stroke="#526171" stroke-width="3" transform="rotate(-12 223 328)"/><path d="M145 70 L160 48 L175 70 M145 355 L160 382 L175 355" fill="none" stroke="#c8202f" stroke-width="2"/><text x="160" y="20" fill="#18212b" text-anchor="middle" font-size="11" font-weight="bold">AVANT</text><text x="160" y="425" fill="#18212b" text-anchor="middle" font-size="11" font-weight="bold">ARRIÈRE</text><text x="160" y="215" fill="#526171" text-anchor="middle" font-size="11">CHÂSSIS</text></svg><p>Schéma indicatif, non à l’échelle. Les valeurs sont celles de ce setup.</p></div><div class="print-geometry-values"><dl>'+(geoRows||'<div><dt>Géométrie</dt><dd>Aucune valeur renseignée dans ce setup.</dd></div>')+'</dl></div></div><p class="print-geometry-note">Les positions de fixation sont indiquées selon les repères du châssis. Vérifie les conventions de mesure du fabricant.</p></section>':'';
  const intro=printable.querySelector('.kicker')?.textContent?.trim()||'FICHE DE RÉGLAGES';
  const compareHint=isComparison?'<span class="print-chip">COMPARATIF A / B</span>':'<span class="print-chip">CARNET DE RÉGLAGES · TT 1/10</span>';
  const styles=String.raw`
    :root{color-scheme:light;--ink:#18212b;--muted:#66717d;--line:#d9dee3;--soft:#f2f4f5;--accent:#c8202f;--accent-dark:#8f1722}
    *{box-sizing:border-box}
    html{background:#e9ecef}
    body{max-width:980px;margin:24px auto;padding:0 34px 38px;background:#fff;color:var(--ink);font:9.2pt/1.42 Arial,Helvetica,sans-serif}
    .print-topline{height:7px;margin:0 -34px;background:var(--accent)}
    .print-masthead{display:flex;justify-content:space-between;align-items:center;padding:18px 0 13px;border-bottom:1px solid var(--line)}
    .print-brand{display:flex;align-items:center;gap:10px}
    .print-mark{display:block;width:48px;height:48px;object-fit:cover;border:1px solid #cbd2d9;border-radius:10px}
    .print-brand small{display:block;color:var(--muted);font-size:7pt;font-weight:700;letter-spacing:2.3px}
    .print-brand strong{display:block;font-size:17pt;line-height:1;letter-spacing:-.7px}
    .print-edition{text-align:right;color:var(--muted);font-size:7.5pt;line-height:1.6}
    .print-edition b{color:var(--ink);letter-spacing:1.1px}
    .print-hero{position:relative;margin:24px 0 18px;padding:22px 24px 21px;border:0;border-left:7px solid var(--accent);background:#202832;color:#fff;min-height:132px}
    .print-kicker{display:flex;align-items:center;gap:9px;margin-bottom:12px;color:#ff9aa3;font-size:7.5pt;font-weight:800;letter-spacing:1.6px}
    .print-chip{display:inline-block;padding:5px 9px;background:#3b4652;color:#ffd9dd;font-size:7pt;letter-spacing:1px}
    .print-title{margin:0 0 8px;color:#fff;font-size:26pt;line-height:1.06;letter-spacing:-.8px;font-weight:800}
    .print-subtitle{margin:0;color:#d1d8de;font-size:9pt;letter-spacing:.2px}
    .print-overview{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px;margin:18px 0 20px}
    .print-overview-item{min-height:62px;padding:11px 12px;background:#f5f6f7;border:1px solid #e1e5e9;border-top:3px solid var(--accent)}
    .print-overview-item small{display:block;margin-bottom:6px;color:var(--accent-dark);font-size:6.5pt;font-weight:800;letter-spacing:1.1px;text-transform:uppercase}
    .print-overview-item strong{display:block;color:#202832;font-size:9pt;line-height:1.3;overflow-wrap:anywhere}
    .print-section{margin:12px 0;padding:12px 14px;border:1px solid var(--line);border-top:2px solid #333b44;background:#fff;break-inside:avoid;page-break-inside:avoid}
    .print-section h3{margin:0 0 9px;padding:0 0 8px;border-bottom:1px solid var(--line);font-size:10.5pt;line-height:1.2;color:#202832}
    .print-section dl{display:grid;grid-template-columns:1fr 1fr;column-gap:22px;margin:0}
    .print-section dl>div{display:grid;grid-template-columns:minmax(112px,.9fr) minmax(0,1.1fr);gap:8px;align-items:start;padding:5px 0;border-bottom:1px solid #edf0f2;break-inside:avoid}
    .print-section dt{color:var(--muted);font-size:7.7pt}
    .print-section dd{margin:0;color:var(--ink);font-size:8pt;font-weight:700;overflow-wrap:anywhere}
    .print-photo-section{break-inside:auto}
    .print-cover-summary{display:flex;justify-content:space-between;gap:16px;margin:20px 0 0;padding:15px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);color:var(--muted);font-size:7.5pt;letter-spacing:.3px}
    .print-cover-summary strong{display:block;margin-bottom:4px;color:var(--accent-dark);font-size:7pt;letter-spacing:1px}
    .print-page-two{display:block;clear:both;break-before:page!important;page-break-before:always!important;break-inside:auto!important;page-break-inside:auto!important}
    .print-page-heading{display:flex;justify-content:space-between;margin:0 0 12px;padding:0 0 8px;border-bottom:2px solid #26313b;color:#78838d;font-size:7pt;letter-spacing:1px}
    .print-page-heading strong{color:#26313b}
    .setup-gallery,.car-photo-gallery,.car-detail-photos{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin:8px 0}
    .setup-gallery a{display:block;break-inside:avoid}
    .setup-gallery img,.car-photo-gallery img,.car-detail-photos img{display:block;width:100%;max-height:190px;aspect-ratio:4/3;object-fit:contain;border:1px solid var(--line);background:#f7f8f9}
    .print-geometry-page{clear:both;break-before:page!important;page-break-before:always!important;padding-top:2px}
    .print-geometry-page h2{margin:18px 0 16px;font-size:18pt;color:#202832}
    .print-geometry-layout{display:grid;grid-template-columns:minmax(190px,.8fr) minmax(0,1.3fr);gap:20px;align-items:start}
    .print-geometry-diagram{padding:12px;border:1px solid var(--line);background:#f7f8f9;text-align:center}
    .print-geometry-diagram svg{display:block;width:100%;max-height:370px}
    .print-geometry-diagram p,.print-geometry-note{color:var(--muted);font-size:7.5pt}
    .print-geometry-values{padding:10px 14px;border:1px solid var(--line);border-top:3px solid var(--accent)}
    .print-geometry-values dl{margin:0}
    .print-geometry-values dl>div{display:grid;grid-template-columns:minmax(100px,.9fr) minmax(0,1.1fr);gap:10px;padding:8px 0;border-bottom:1px solid #edf0f2;break-inside:avoid}
    .print-geometry-values dt{color:var(--muted);font-size:8pt}
    .print-geometry-values dd{margin:0;color:var(--ink);font-size:8.5pt;font-weight:700;overflow-wrap:anywhere}
    .print-geometry-note{margin-top:16px;padding-top:10px;border-top:1px solid var(--line)}
    .compare-table{width:100%}
    .compare-row{display:grid;grid-template-columns:1.05fr .9fr .9fr 1.2fr;gap:8px;padding:7px 8px;border-bottom:1px solid var(--line);break-inside:avoid;font-size:8pt}
    .compare-row:nth-child(odd):not(.compare-head){background:#f6f7f8}
    .compare-head{background:#252d36;color:#fff;font-weight:800}\n    .compare-change{color:var(--accent-dark);font-weight:800;overflow-wrap:anywhere}
    .history-entry{padding:6px 0;border-bottom:1px solid var(--line);font-size:8pt}
    .dialog-subtitle{color:var(--muted)}
    .print-footer{display:flex;justify-content:space-between;gap:15px;margin-top:22px;padding-top:9px;border-top:1px solid var(--line);color:var(--muted);font-size:7pt}
    .print-footer strong{color:var(--ink);letter-spacing:.6px}
    .item-sub,.muted{color:var(--muted)}
    button,a.button{display:none!important}
    .preview-close{position:fixed;z-index:9999;top:12px;right:12px;display:inline-flex!important;align-items:center;gap:8px;padding:11px 16px;border:0;border-radius:999px;background:#202832;color:#fff;font:700 14px Arial,sans-serif;box-shadow:0 4px 18px rgba(0,0,0,.2);cursor:pointer}
    .preview-close .close-x{font-size:20px;line-height:1}
    @page{size:A4;margin:12mm 13mm 14mm}
    @media print{
      html{background:#fff}
      .preview-close{display:none!important}
      body{max-width:none;margin:0;padding:0}
      .print-topline{margin:0 -13mm}
      .print-page-two{display:block;clear:both;break-before:page!important;page-break-before:always!important;break-inside:auto!important;page-break-inside:auto!important}
      .print-section{break-inside:auto;page-break-inside:auto}
      .print-section h3{break-after:avoid;page-break-after:avoid}
      .print-section dl>div{break-inside:avoid}
      .print-photo-section{break-inside:avoid}
      .print-footer{position:fixed;bottom:-8mm;left:0;right:0}
      *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
    }
    @media(max-width:650px){body{padding:0 16px}.print-overview{grid-template-columns:1fr 1fr}.print-section dl{grid-template-columns:1fr}.compare-row{grid-template-columns:1fr 1fr 1fr 1.2fr}}
  `;
  const buggyDiagram='';

  const overview=meta.slice(0,4).map((value,index)=>{
    const labels=['SURFACE','ADHÉRENCE','MÉTÉO','TEMPÉRATURE'];
    return '<div class="print-overview-item"><small>'+labels[index]+'</small><strong>'+escapeHtml(value)+'</strong></div>';
  }).join('');
  const printWindow=window.open('','_blank');
  if(!printWindow){showToast('Autorise les fenêtres pop-up pour imprimer la fiche.');return;}
  printWindow.document.open();
  printWindow.document.write('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+escapeHtml(heading)+' — RC SETUP</title><style>'+styles+'</style></head><body><button class="preview-close" type="button" onclick="window.close()" aria-label="Fermer le PDF et revenir à RC SETUP"><span class="close-x" aria-hidden="true">×</span> Retour à RC SETUP</button><div class="print-topline"></div><header class="print-masthead"><div class="print-brand"><img class="print-mark" src="'+new URL('./assets/rc-setup-logo.png?v=175',location.href).href+'" alt="RC SETUP"><span><small>GARAGE NUMÉRIQUE</small><strong>SETUP.</strong></span></div><div class="print-edition"><b>'+escapeHtml(intro)+'</b><br>ÉDITION DU '+escapeHtml(dateLabel.toUpperCase())+'<br>'+sectionCount+' RUBRIQUES · '+filledCount+' LIGNES DE DONNÉES</div></header><main><section class="print-hero"><div class="print-kicker">'+compareHint+'</div><h1 class="print-title">'+escapeHtml(heading)+'</h1><p class="print-subtitle">'+escapeHtml(subtitle)+'</p></section><div class="print-overview">'+overview+'</div><div class="print-cover-summary"><span><strong>CONTENU DU DOSSIER</strong>'+sectionCount+' rubriques techniques</span><span><strong>DONNÉES RENSEIGNÉES</strong>'+filledCount+' valeurs enregistrées</span><span><strong>ÉDITION</strong>'+escapeHtml(dateLabel)+'</span></div><div class="print-page-two"><div class="print-page-heading"><span>RC SETUP / DOSSIER TECHNIQUE</span><strong>02 / RÉGLAGES & SUIVI</strong></div>'+sectionMarkup+'</div>'+geometryPageMarkup+'</main><footer class="print-footer"><span><strong>RC SETUP</strong> · FICHE TECHNIQUE PERSONNELLE</span><span>Document édité le '+escapeHtml(dateLabel)+'</span></footer></body></html>');
  printWindow.document.close();
  printWindow.focus();
  setTimeout(()=>{printWindow.print();},650);
}
function compareSetups(){
  const a=state.setups.find(s=>s.id===document.getElementById('compareSetupA')?.value),b=state.setups.find(s=>s.id===document.getElementById('compareSetupB')?.value);
  if(!a||!b){showToast('Sélectionne deux setups à comparer.');return;}if(a.id===b.id){showToast('Choisis deux setups différents.');return;}
  const carA=getCarById(a.carId),carB=getCarById(b.carId),trackA=getTrackById(a.trackId),trackB=getTrackById(b.trackId);
  const fields=[...new Set(SETUP_FIELDS)].filter(k=>String(a[k]??'')!==String(b[k]??'')&&(a[k]||b[k]));
  const label=k=>k.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase()).replace(/esc/gi,'ESC').replace(/radio/gi,'Radio').replace(/front/gi,'avant').replace(/rear/gi,'arrière');
  const content=document.getElementById('setupDetails');
  content.innerHTML=`<div class="pdf-action-banner"><div><strong>Exporter cette comparaison en PDF</strong><span>Fiche A4 avec les différences et les chronos.</span></div><button class="button button-primary pdf-main-button" id="printCompareSetupTop" type="button">⇩ Imprimer / PDF</button></div><span class="kicker">COMPARAISON DE CONFIGURATIONS</span><h2>${escapeHtml(carA?.name||'Voiture')} ↔ ${escapeHtml(carB?.name||'Voiture')}</h2><p class="dialog-subtitle">${escapeHtml(trackA?.name||'Piste')} · ${escapeHtml(a.sessionDate||formatDate(a.createdAt))} <span class="arrow">vs</span> ${escapeHtml(trackB?.name||'Piste')} · ${escapeHtml(b.sessionDate||formatDate(b.createdAt))}</p><section class="detail-group"><h3>Chronos</h3><dl><div><dt>Setup A</dt><dd>${escapeHtml(a.lapTime||'—')}</dd></div><div><dt>Setup B</dt><dd>${escapeHtml(b.lapTime||'—')}</dd></div></dl></section><section class="detail-group"><h3>Réglages différents (${fields.length})</h3>${fields.length?`<div class="compare-table"><div class="compare-row compare-head"><strong>Réglage</strong><strong>Setup A</strong><strong>Setup B</strong></div>${fields.map(k=>{const before=a[k]||'—',after=b[k]||'—';return `<div class="compare-row"><span>${escapeHtml(label(k))}</span><span>${escapeHtml(before)}</span><span>${escapeHtml(after)}</span><strong class="compare-change">${escapeHtml(before)} → ${escapeHtml(after)}</strong></div>`;}).join('')}</div>`:'<p class="item-sub">Les réglages enregistrés sont identiques.</p>'}</section><div class="item-actions detail-actions"><button class="button button-primary" id="printSetupDetails" type="button">Imprimer / PDF</button></div>`;
  content.querySelector('#printSetupDetails').addEventListener('click',printSetupDetails);
  content.querySelector('#printCompareSetupTop').addEventListener('click',printSetupDetails);
  document.getElementById('setupDialog').showModal();
}



function setTracksideMode(enabled){
  document.body.classList.toggle('trackside-mode',enabled);
  const button=document.getElementById('tracksideModeButton');
  if(button){button.setAttribute('aria-pressed',String(enabled));button.textContent=enabled?'Quitter mode piste':'Mode piste';}
  try{localStorage.setItem('rc-setup-trackside-mode',enabled?'1':'0');}catch{}
}

function parsePositiveNumber(value){const n=Number(String(value||'').replace(',','.'));return Number.isFinite(n)&&n>0?n:null;}
function calculateGearing(){
  const pinion=parsePositiveNumber(document.getElementById('calcPinion')?.value),spur=parsePositiveNumber(document.getElementById('calcSpur')?.value),internal=parsePositiveNumber(document.getElementById('calcInternal')?.value),diameter=parsePositiveNumber(document.getElementById('calcDiameter')?.value);
  const result=document.getElementById('gearingResult');if(!result)return;
  if(!pinion||!spur){result.textContent='Renseigne le nombre de dents du pignon et de la couronne.';return;}
  const ratio=spur/pinion,final=internal?ratio*internal:null,rollout=diameter?Math.PI*diameter/ratio:null;
  result.innerHTML='<strong>Rapport externe : '+ratio.toFixed(3)+'</strong>'+(final?'<br>Rapport total : '+final.toFixed(3):'')+(rollout?'<br>Développement théorique : '+rollout.toFixed(1)+' mm par tour moteur (diamètre de roue renseigné).':'')+'<p class="item-sub">Un rapport externe plus élevé tire plus court. Le rapport total nécessite le rapport interne exact du véhicule.</p>';
}
function runSetupDiagnosis(){
  const symptom=document.getElementById('diagnosisSymptom')?.value,grip=document.getElementById('diagnosisGrip')?.value,drive=document.getElementById('diagnosisDrive')?.value;
  const output=document.getElementById('diagnosisResult');if(!output)return;
  if(!symptom){output.textContent='Choisis le comportement à corriger pour afficher des pistes de réglage.';return;}
  const sets={
    understeer_entry:[['Priorité 1 · Direction','Contrôle les points durs, le servo, le débattement et le pincement avant.','Retrouver une réponse immédiate et régulière à l’inscription.'],['Priorité 2 · Pneus avant','Vérifie gomme, usure, collage et inserts ; teste une gomme plus accrocheuse si nécessaire.','Augmenter le grip latéral du train avant.'],['Priorité 3 · Chasse','Augmente légèrement la chasse si le châssis le permet.','Améliorer le maintien et la précision en entrée.']],
    understeer_mid:[['Priorité 1 · Grip avant','Contrôle les pneus avant et leur température après quelques tours.','Récupérer du grip constant au milieu du virage.'],['Priorité 2 · Équilibre de roulis','Teste une barre avant plus souple ou une barre arrière légèrement plus ferme, si disponible.','Aider la voiture à pivoter sans rendre les changements brutaux.'],['Priorité 3 · Géométrie','Vérifie carrossage et largeur de voie avant.','Optimiser l’appui du pneu avant en virage.']],
    understeer_exit:[['Priorité 1 · Transmission','Vérifie le différentiel avant sur 4WD ou le slipper et la remise des gaz sur 2WD.','Éviter que la transmission tire la voiture tout droit.'],['Priorité 2 · Pneus','Contrôle le grip arrière et l’état des pneus avant.','Conserver un équilibre entre motricité et rotation.'],['Priorité 3 · Électronique','Adoucis légèrement punch et réponse des gaz.','Rendre la sortie plus progressive et contrôlable.']],
    oversteer_entry:[['Priorité 1 · Stabilité arrière','Vérifie le pincement arrière et les jeux de suspension.','Stabiliser la voiture au freinage et au lever de gaz.'],['Priorité 2 · Freinage','Réduis légèrement le frein initial si le train arrière se déleste.','Limiter le blocage et les transferts brusques.'],['Priorité 3 · Pneus arrière','Contrôle gomme, inserts et collage.','Augmenter la réserve de grip arrière.']],
    oversteer_mid:[['Priorité 1 · Pneus arrière','Vérifie usure, température et propreté.','Retrouver du grip latéral au milieu du virage.'],['Priorité 2 · Barre arrière','Essaie une barre arrière plus souple si le châssis en possède une.','Réduire la vivacité du train arrière.'],['Priorité 3 · Géométrie','Contrôle carrossage et largeur de voie arrière.','Rendre l’appui arrière plus progressif.']],
    oversteer_exit:[['Priorité 1 · Gaz','Réduis le punch ou augmente légèrement l’expo gaz négative.','Éviter la perte d’adhérence à la remise des gaz.'],['Priorité 2 · Slipper / différentiels','Contrôle le slipper en 2WD ou la cohérence des différentiels en 4WD.','Rendre le transfert de couple plus progressif.'],['Priorité 3 · Suspension arrière','Vérifie détente, précontrainte et liberté des amortisseurs.','Garder le pneu arrière en contact avec le sol.']],
    traction:[['Priorité 1 · Pneus et inserts','Vérifie gomme, diamètre, inserts et propreté des pneus moteurs.','Augmenter le grip disponible sans toucher au châssis.'],['Priorité 2 · Commande des gaz','Adoucis punch et accélération à la radio/ESC.','Réduire le patinage à l’accélération.'],['Priorité 3 · Suspension','Contrôle droop et liberté des amortisseurs arrière.','Améliorer le suivi du sol et le transfert de charge.']],
    instability:[['Priorité 1 · Contrôle mécanique','Vérifie jeux, roulements, visserie, triangles et amortisseurs.','Éliminer les réactions parasites avant tout réglage.'],['Priorité 2 · Assiette','Contrôle hauteurs de caisse, droop et symétrie gauche/droite.','Retrouver une voiture équilibrée et prévisible.'],['Priorité 3 · Amortissement','Vérifie huile, pistons et ressorts ; ne change qu’un élément à la fois.','Calmer les rebonds et améliorer le contact au sol.']]
  };
  const proposals=sets[symptom]||sets.instability;
  const gripText=grip==='low'?'Faible grip : privilégie les changements modestes et la progressivité.':grip==='high'?'Fort grip : surveille le roulis, les réactions brusques et le risque de retournement.':'Grip moyen : procède par petits incréments.';
  const driveText=drive==='2wd'?'2WD':drive==='4wd'?'4WD':'architecture non précisée';
  output.innerHTML='<strong>Plan d’action · '+driveText+'</strong><div class="diagnosis-proposals">'+proposals.map((p,i)=>'<article class="diagnosis-proposal"><span class="diagnosis-rank">'+(i+1)+'</span><div><strong>'+p[0]+'</strong><p>'+p[1]+'</p><small><b>Effet attendu :</b> '+p[2]+'</small></div></article>').join('')+'</div><p class="item-sub">'+gripText+'</p><p class="item-sub">Teste dans cet ordre, une seule modification à la fois. Les effets dépendent du châssis et de la piste : vérifie toujours le manuel constructeur.</p>';
}

function formatDate(value) {
  if (!value) return 'Date non précisée';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Date non précisée';
  return new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
}
function populateSelects() {
  const carSelect = document.querySelector('select[name="carId"]');
  const trackSelect = document.querySelector('select[name="trackId"]');
  const selectedCar = carSelect.value;
  const selectedTrack = trackSelect.value;
  carSelect.innerHTML = '<option value="">Choisir une voiture</option>' + state.cars.map((car) => `<option value="${escapeHtml(car.id)}" data-drive="${escapeHtml(car.drive||'')}">${escapeHtml(car.name)}</option>`).join('');
  trackSelect.innerHTML = '<option value="">Choisir une piste</option>' + state.tracks.map((track) => `<option value="${escapeHtml(track.id)}">${escapeHtml(track.name)}</option>`).join('');
  if (state.cars.some((car) => car.id === selectedCar)) carSelect.value = selectedCar;
  if (state.tracks.some((track) => track.id === selectedTrack)) trackSelect.value = selectedTrack;
}
function renderAll() { renderDashboard(); renderCars(); renderTracks(); renderSetups(); populateSelects(); }
function populateMaintenanceCars(){
 const select=document.getElementById('maintenanceCar');if(!select)return;
 const value=select.value;select.innerHTML='<option value="">Choisir une voiture…</option>'+state.cars.map(car=>'<option value="'+escapeHtml(car.id)+'">'+escapeHtml(car.name)+'</option>').join('');
 if(state.cars.some(car=>car.id===value))select.value=value;
 renderMaintenanceList();
}
function renderMaintenanceList(){
  const select=document.getElementById('maintenanceCar'),list=document.getElementById('maintenanceList');if(!select||!list)return;
  const id=select.value;const entries=(state.maintenance||[]).filter(item=>item.carId===id).sort((x,y)=>String(y.date).localeCompare(String(x.date)));
  list.innerHTML=!id?'<p class="item-sub">Sélectionne une voiture pour consulter son carnet.</p>':!entries.length?'<p class="item-sub">Aucune intervention enregistrée pour cette voiture.</p>':entries.map(item=>{
    const remaining=Number(item.next||0);
    const due=item.next?(remaining<=0?'<span class="maintenance-status overdue">À effectuer</span>':remaining<=1?'<span class="maintenance-status soon">Bientôt</span>':'<span class="maintenance-status ok">À jour</span>'):'';
    return '<article class="maintenance-entry"><div class="maintenance-entry-head"><div><strong>'+escapeHtml(item.part)+'</strong><p>'+escapeHtml(item.workType||'Entretien')+' · '+escapeHtml(formatDate(item.date))+'</p></div>'+due+'</div><p>'+Number(item.sessions||0)+' session(s) depuis l’intervention'+(item.next?' · échéance à '+Number(item.next)+' session(s)':'')+'</p>'+(item.replacedParts?'<p><b>Pièces :</b> '+escapeHtml(item.replacedParts)+'</p>':'')+(item.notes?'<p>'+escapeHtml(item.notes)+'</p>':'')+'<div class="maintenance-entry-actions"><button class="button button-quiet maintenance-delete" data-id="'+escapeHtml(item.id)+'" type="button">Supprimer</button></div></article>';
  }).join('');
  list.querySelectorAll('.maintenance-delete').forEach(button=>button.addEventListener('click',()=>{
    if(!confirm('Supprimer cette intervention du carnet ?'))return;
    state.maintenance=state.maintenance.filter(item=>item.id!==button.dataset.id);
    if(saveState())renderMaintenanceList();
  }));
}
function populateBatterySelect(){
  const select=document.getElementById('batteryLogSelect');if(!select)return;
  const value=select.value;select.innerHTML='<option value="">Choisir une batterie…</option>'+(state.batteries||[]).map(b=>'<option value="'+escapeHtml(b.id)+'">'+escapeHtml(b.name)+' · '+escapeHtml(b.capacity)+' mAh</option>').join('');
  const carSelect=document.getElementById('batteryCar');if(carSelect){const selected=carSelect.value;carSelect.innerHTML='<option value="">Aucune voiture associée</option>'+state.cars.map(car=>'<option value="'+escapeHtml(car.id)+'">'+escapeHtml(car.name)+'</option>').join('');if(state.cars.some(car=>car.id===selected))carSelect.value=selected;}
  if((state.batteries||[]).some(b=>b.id===value))select.value=value;
}
function renderBatteries(){
  const list=document.getElementById('batteryList');if(!list)return;
  const batteries=Array.isArray(state.batteries)?state.batteries:[];
  list.innerHTML=!batteries.length?'<p class="item-sub">Aucune batterie enregistrée. Ajoute ta première LiPo ci-dessus.</p>':batteries.map(b=>{
    const latest=(b.history||[])[0],voltage=b.voltage?Number(b.voltage).toFixed(2)+' V':latest?.voltage?Number(latest.voltage).toFixed(2)+' V':'Non renseignée',cells=Number(b.cells||0);
    const perCell=b.voltage&&cells?(Number(b.voltage)/cells).toFixed(2)+' V':'';
    return '<article class="battery-entry"><div class="battery-entry-head"><div><strong>'+escapeHtml(b.name)+'</strong><p>'+escapeHtml(b.brand||'Marque non précisée')+' · '+escapeHtml(b.capacity)+' mAh · '+cells+'S'+(getCarById(b.carId)?' · '+escapeHtml(getCarById(b.carId).name):'')+'</p></div><span class="battery-cycles">'+Number(b.cycles||0)+' cycles</span></div><div class="battery-metrics"><span><small>Tension</small><b>'+voltage+'</b></span><span><small>Par cellule (moy.)</small><b>'+(perCell||'—')+'</b></span><span><small>Connecteur</small><b>'+escapeHtml(b.connector||'—')+'</b></span></div>'+(b.notes?'<p class="item-sub">'+escapeHtml(b.notes)+'</p>':'')+'<details class="battery-history"><summary>Historique ('+(b.history||[]).length+')</summary>'+((b.history||[]).length?(b.history||[]).map(h=>'<p>'+escapeHtml(formatDate(h.date))+' · '+escapeHtml(h.type||'Utilisation')+(h.voltage?' · '+Number(h.voltage).toFixed(2)+' V':'')+(h.cycles?' · +'+Number(h.cycles)+' cycle(s)':'')+(h.notes?' — '+escapeHtml(h.notes):'')+'</p>').join(''):'<p class="item-sub">Aucun événement enregistré.</p>')+'</details><div class="battery-entry-actions"><button class="button button-quiet battery-delete" data-id="'+escapeHtml(b.id)+'" type="button">Supprimer</button></div></article>';
  }).join('');
  populateBatterySelect();
  list.querySelectorAll('.battery-delete').forEach(button=>button.addEventListener('click',()=>{
    if(!confirm('Supprimer cette batterie et son historique ?'))return;
    state.batteries=state.batteries.filter(b=>b.id!==button.dataset.id);
    if(saveState()){renderBatteries();showToast('Batterie supprimée.');}
  }));
}
function handleBatterySubmit(event){
  event.preventDefault();const form=event.currentTarget,data=new FormData(form);
  const name=String(data.get('name')||'').trim(),capacity=Number(data.get('capacity')||0),cells=Number(data.get('cells')||0);
  if(!name||capacity<=0||cells<1)return;
  const battery={id:uid('battery'),name,brand:String(data.get('brand')||'').trim(),capacity,cells,carId:String(data.get('carId')||''),connector:String(data.get('connector')||'').trim(),cycles:Number(data.get('cycles')||0),voltage:Number(data.get('voltage')||0),notes:String(data.get('notes')||'').trim(),history:[]};
  state.batteries=Array.isArray(state.batteries)?state.batteries:[];
  state.batteries.unshift(battery);
  if(!saveState()){state.batteries.shift();return;}
  form.elements.namedItem('name').value='';form.elements.namedItem('brand').value='';form.elements.namedItem('carId').value='';form.elements.namedItem('capacity').value='';form.elements.namedItem('cells').value='2';form.elements.namedItem('connector').value='';form.elements.namedItem('cycles').value='0';form.elements.namedItem('voltage').value='';form.elements.namedItem('notes').value='';renderBatteries();showToast('Batterie ajoutée au gestionnaire.');
}
function handleBatteryLog(event){
  event.preventDefault();const battery=state.batteries?.find(b=>b.id===document.getElementById('batteryLogSelect').value);if(!battery)return;
  const type=document.getElementById('batteryLogType').value,voltage=Number(document.getElementById('batteryLogVoltage').value||0),cycles=Number(document.getElementById('batteryLogCycles').value||0),notes=document.getElementById('batteryLogNotes').value.trim();
  if(voltage>0)battery.voltage=voltage;
  battery.cycles=Math.max(0,Number(battery.cycles||0)+cycles);
  battery.history=Array.isArray(battery.history)?battery.history:[];
  battery.history.unshift({date:new Date().toISOString().slice(0,10),type,voltage:voltage||null,cycles,notes});
  if(!saveState())return;
  document.getElementById('batteryLogSelect').value='';document.getElementById('batteryLogVoltage').value='';document.getElementById('batteryLogCycles').value='0';document.getElementById('batteryLogNotes').value='';renderBatteries();showToast('Événement batterie enregistré.');
}
function formValues(form, names) {
  const data = new FormData(form);
  return Object.fromEntries(names.map((name) => [name, String(data.get(name) || '').trim()]));
}

function getCatalogFilters() {
  return {
    brand: document.getElementById('carCatalogBrandPicker')?.dataset.selectedBrand || '',
    drive: document.getElementById('carCatalogDrive')?.value || '',
    era: document.getElementById('carCatalogEra')?.value || '',
    query: (document.getElementById('carCatalogSearch')?.value || '').trim().toLocaleLowerCase('fr')
  };
}
function renderCarCatalogBrandPicker() {
  const picker=document.getElementById('carCatalogBrandPicker');
  if(!picker || picker.dataset.ready==='true')return;
  const brands=[...new Set(CAR_CATALOG.map(model=>model.brand).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'fr'));
  const logos={
    'Fan RC':'./assets/fan-rc-logo.svg',
    'F.A.N. RC':'./assets/fan-rc-logo.svg',
    'X-Factory':'./assets/x-factory-logo.svg',
    'Kyosho':'https://cdn.brandfetch.io/idXDBNlT9W/w/568/h/133/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1792896373403',
    'PR Racing':'https://i0.wp.com/circusrc.com/CRC/wp-content/uploads/2019/09/PR-Racing.jpg?fit=1024%2C512&ssl=1',
    'Mugen Seiki':'https://www.autocollant-tuning.com/3061-product_main/sticker-et-autocollant-mugen-seiki.jpg',

    'Team Losi':'https://images.seeklogo.com/logo-png/32/1/team-losi-racing-logo-png_seeklogo-324214.png',
    'Traxxas':'https://www.kindpng.com/picc/m/72-728397_traxxas-logo-png-transparent-png.png',
    'Team Associated':'https://apps.associatedelectrics.com/downloads/thumbs/TeamAssociated-color-lightBG-300.png',
    'Schumacher':'https://schumacher-racing.com/wp-content/uploads/2024/01/Schumacher_racing_pink-gelb-1.png',

    'Tamiya':'https://www.most-models.com/files/tamiya-modelbouw.png',
    'Yokomo':'https://cdn.ecommercedns.uk/files/7/229017/4/49342684/yokomo-logo-retro.png',
    'XRAY':'https://www.xraystore.cz/user/categories/orig/xray-1.png'
  };
  picker.innerHTML=brands.map(brand=>{
    const initials=brand.split(/[\s-]+/).map(word=>word[0]).slice(0,2).join('').toUpperCase();
    const logo=logos[brand];
    return '<button type="button" class="material-brand-tile'+(logo?' has-brand-logo':'')+'" data-brand="'+escapeHtml(brand)+'" aria-pressed="false">'+(logo?'<img class="material-brand-logo" src="'+logo+'" alt="" loading="lazy" decoding="async">':'')+'<span class="brand-logo-mark">'+escapeHtml(initials)+'</span><span class="material-brand-name">'+escapeHtml(brand)+'</span></button>';
  }).join('');
  picker.querySelectorAll('.material-brand-logo').forEach(img=>{
    img.addEventListener('load',()=>img.parentElement.classList.add('has-logo-loaded'));
    img.addEventListener('error',()=>{img.parentElement.classList.remove('has-brand-logo');img.remove();});
  });
  picker.dataset.ready='true';
}
function addCatalogCarByIndex(index) {
  const model = CAR_CATALOG[Number(index)];
  if (!model) return;
  state.cars.unshift({ id: uid('car'), name: model.name, brand: model.brand, scale: model.scale, drive: normalizeDriveType(model.drive), type: model.type, era: model.era, diffCount: inferDifferentialCount(model), photos: [], createdAt: new Date().toISOString() });
  saveState(); renderAll();
  const select = document.getElementById('carCatalogModel');
  if (select) select.value = '';
  showToast(model.name + ' ajouté au garage.');
}
function updateCarCatalogOptions() {
  const { brand, drive, era, query } = getCatalogFilters();
  const select = document.getElementById('carCatalogModel');
  if (!select) return;
  const filtered = CAR_CATALOG.map((model, index) => ({ model, index })).filter(({model}) =>
    (!brand || model.brand === brand) && (!drive || normalizeDriveType(model.drive) === drive) && (!era || model.era === era) &&
    (!query || (model.name + ' ' + model.brand + ' ' + model.type + ' ' + model.scale).toLocaleLowerCase('fr').includes(query))
  );
  select.innerHTML = '<option value="">Choisir un modèle…</option>' + filtered.map(({model,index}) =>
    '<option value="' + index + '">' + escapeHtml(model.name + ' · ' + model.brand + ' · ' + model.scale + ' · ' + model.drive) + '</option>'
  ).join('');
  const picker=document.getElementById('carCatalogBrandPicker');
  picker?.querySelectorAll('[data-brand]').forEach(button=>{
    const active=brand===button.dataset.brand;
    button.classList.toggle('selected',active);
    button.setAttribute('aria-pressed',String(active));
  });
  document.getElementById('clearCarCatalogBrand')?.classList.toggle('active',!brand);
  const count = document.getElementById('carCatalogCount');
  if (count) count.textContent = filtered.length + ' modèles disponibles.';
}
function handleCarCatalogAdd() {
  const selected = document.getElementById('carCatalogModel')?.value;
  if (selected === '' || selected == null) { showToast('Sélectionne un modèle dans la liste ou dans les résultats affichés.'); return; }
  addCatalogCarByIndex(selected);
}
function normalizeDriveType(value) {
  const drive=String(value||'').toLocaleLowerCase('fr').trim();
  if (/2wd|4x2|propulsion|traction avant/.test(drive)) return '2WD';
  if (/4wd|4x4/.test(drive)) return '4WD';
  return drive ? 'Autre' : '';
}
function inferDifferentialCount(car) {
  const drive=normalizeDriveType(car?.drive);
  if (drive==='2WD') return 1;
  if (/1\s*\/\s*8/.test(String(car?.scale||''))) return 3;
  if (drive==='4WD') return 2;
  return 1;
}
function getCarDifferentialCount(car) {
  const count=Number(car?.diffCount);
  return Number.isInteger(count)&&count>=1&&count<=3?count:inferDifferentialCount(car);
}
function openCarEditor(id) {
  const car=getCarById(id);if(!car)return;
  const form=document.getElementById('carForm');editingCarId=id;
  for(const name of ['name','brand','scale','drive','type','notes','engineEquipment','escEquipment','servoEquipment']){const field=form.elements.namedItem(name);if(field)field.value=name==='drive'?normalizeDriveType(car[name]):(car[name]||'');}const diffField=form.elements.namedItem('diffCount');if(diffField)diffField.value=car.diffCount?String(car.diffCount):'auto';
  pendingCarPhotos=Array.isArray(car.photos)?car.photos.slice(0,3):[];
  renderCarPhotoPreviews();
  renderCarEditorHistory(car);
  setCarHistoryTabVisibility(true);
  setCarEditorTab('equipment');
  updateCarBrandPicker();
  form.querySelector('h2').textContent='Modifier la voiture';
  form.querySelector('button[type="submit"]').textContent='Enregistrer les modifications';
  form.classList.remove('hidden');form.scrollIntoView({behavior:'smooth',block:'start'});
}
function resetCarEditor() {
  editingCarId=null;pendingCarPhotos=[];
  const form=document.getElementById('carForm');if(!form)return;
  const heading=form.querySelector('h2');if(heading)heading.textContent='Ajouter une autre voiture';
  const submit=form.querySelector('button[type="submit"]');if(submit)submit.textContent='Enregistrer';
  renderCarPhotoPreviews();
  renderCarEditorHistory(null);
  setCarHistoryTabVisibility(false);
  setCarEditorTab('equipment');
  updateCarBrandPicker();
}
function renderCarEditorHistory(car) {
  const date=document.getElementById('carEditorCreatedDate'),list=document.getElementById('carEditorHistoryList');
  if(date)date.textContent=car&&car.createdAt?'Date de création : '+formatDate(car.createdAt):'Date de création : elle sera enregistrée à la création de la voiture';
  if(!list)return;
  const entries=Array.isArray(car&&car.partsHistory)?car.partsHistory.slice().sort((a,b)=>String(b.date||'').localeCompare(String(a.date||''))):[];
  list.innerHTML=entries.length?'<strong>Événements déjà enregistrés</strong><ol class="car-parts-history">'+entries.map(entry=>'<li><strong>'+escapeHtml(entry.action||'Événement')+'</strong><span>'+escapeHtml(entry.date||'Date inconnue')+'</span>'+(entry.notes||entry.part?'<p>'+escapeHtml(entry.notes||entry.part)+'</p>':'')+'</li>').join('')+'</ol>':'<p class="item-sub">Aucun événement supplémentaire pour le moment.</p>';
}
function setCarHistoryTabVisibility(visible) {
  const button=document.querySelector('[data-car-tab="history"]');
  const panel=document.querySelector('[data-car-tab-panel="history"]');
  if(button)button.hidden=!visible;
  if(panel)panel.hidden=!visible;
}
function setCarEditorTab(tab) {
  document.querySelectorAll('[data-car-tab]').forEach(button=>{const active=button.dataset.carTab===tab;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active));});
  document.querySelectorAll('[data-car-tab-panel]').forEach(panel=>panel.classList.toggle('hidden',panel.dataset.carTabPanel!==tab));
}
function handleCarSubmit(event) {
  event.preventDefault();
  const data = formValues(event.target, ['name', 'brand', 'scale', 'drive', 'type', 'diffCount', 'notes', 'engineEquipment', 'escEquipment', 'servoEquipment', 'historyAction', 'historyNotes', 'historyDate']);
  if (!data.name) return;
  data.drive=normalizeDriveType(data.drive);data.diffCount=data.diffCount==='auto'?inferDifferentialCount(data):Math.min(3,Math.max(1,Number(data.diffCount)||inferDifferentialCount(data)));
  if(editingCarId){
    const car=getCarById(editingCarId);if(!car){showToast('Voiture introuvable.');return;}
    const previous={...car};
    const now=new Date().toISOString(), history=[...(car.partsHistory||[])];
    for(const [key,label] of [['engineEquipment','Moteur'],['escEquipment','Variateur / ESC'],['servoEquipment','Servo']]){
      const before=String(car[key]||'').trim(),after=String(data[key]||'').trim();
      if(before!==after&&(before||after))history.unshift({date:now.slice(0,10),part:label,action:before?'Remplacement / modification':'Ajout',notes:`${before||'Non renseigné'} → ${after||'Retiré'}`});
    }
    if(data.historyAction||data.historyNotes.trim())history.unshift({date:data.historyDate||now.slice(0,10),action:data.historyAction||'Note',notes:data.historyNotes.trim()});
    delete data.historyAction;delete data.historyNotes;delete data.historyDate;
    Object.assign(car,data,{partsHistory:history.slice(0,100),photos:[...pendingCarPhotos],updatedAt:now});
    if(!saveState()){Object.assign(car,previous);return;}
    showToast('Fiche voiture, équipements et historique mis à jour.');
  }else{
    const now=new Date().toISOString(),partsHistory=[{date:now.slice(0,10),action:'Création de la voiture',notes:''}];
    if(data.historyAction||data.historyNotes.trim())partsHistory.unshift({date:data.historyDate||now.slice(0,10),action:data.historyAction||'Note',notes:data.historyNotes.trim()});
    delete data.historyAction;delete data.historyNotes;delete data.historyDate;
    state.cars.unshift({ id: uid('car'), ...data, partsHistory, photos:[...pendingCarPhotos], createdAt: now });
    if(!saveState()){state.cars.shift();return;}
    showToast('Voiture personnalisée ajoutée au garage.');
  }
  editingCarId=null;pendingCarPhotos=[];renderCarPhotoPreviews();renderAll();event.target.reset();event.target.classList.add('hidden');resetCarEditor();
}
function openTrackEditor(id) {
  const track = getTrackById(id);
  if (!track) return;
  const form = document.getElementById('trackForm');
  editingTrackId = id;
  for (const name of ['name', 'surface', 'grip', 'type', 'location', 'details']) {
    const field = form.elements.namedItem(name);
    if (field) field.value = track[name] || '';
  }
  form.querySelector('button[type="submit"]').textContent = 'Enregistrer les modifications';
  form.classList.remove('hidden');
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function handleTrackSubmit(event) {
  event.preventDefault();
  const data = formValues(event.target, ['name', 'surface', 'grip', 'type', 'location', 'details']);
  if (!data.name) return;
  if (editingTrackId) {
    const index = state.tracks.findIndex(track => track.id === editingTrackId);
    if (index < 0) { showToast('Piste introuvable.'); return; }
    const previous = state.tracks[index];
    state.tracks[index] = { ...previous, ...data, updatedAt: new Date().toISOString() };
    if (!saveState()) { state.tracks[index] = previous; return; }
    showToast('Piste mise à jour.');
  } else {
    state.tracks.unshift({ id: uid('track'), ...data, createdAt: new Date().toISOString() });
    if (!saveState()) { state.tracks.shift(); return; }
    showToast('Piste ajoutée à ton carnet.');
  }
  editingTrackId = null;
  renderAll();
  event.target.reset();
  event.target.classList.add('hidden');
  event.target.querySelector('button[type="submit"]').textContent = 'Enregistrer';
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Lecture de la photo impossible'));
    reader.readAsDataURL(file);
  });
}

async function compressPhoto(file) {
  if (!file.type.startsWith('image/')) throw new Error('Choisis uniquement des fichiers image.');
  if (file.size > MAX_PHOTO_BYTES) throw new Error('Chaque photo doit faire moins de 12 Mo.');

  let bitmap;
  try {
    bitmap = await createImageBitmap(file);
    const maxSide = 1280;
    const ratio = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(bitmap.width * ratio));
    canvas.height = Math.max(1, Math.round(bitmap.height * ratio));
    const context = canvas.getContext('2d');
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();
    return canvas.toDataURL('image/jpeg', 0.72);
  } catch (error) {
    if (bitmap) bitmap.close?.();
    return readFileAsDataURL(file);
  }
}

function renderPhotoPreviews() {
  const container = document.getElementById('setupPhotoPreview');
  container.replaceChildren();
  pendingPhotos.forEach((photo, index) => {
    const tile = document.createElement('div');
    tile.className = 'photo-preview-tile';
    tile.innerHTML = `<img src="${photo}" alt="Aperçu de la photo ${index + 1}"><button type="button" class="photo-remove" aria-label="Retirer la photo ${index + 1}">×</button>`;
    tile.querySelector('.photo-remove').addEventListener('click', () => {
      pendingPhotos.splice(index, 1);
      renderPhotoPreviews();
    });
    container.append(tile);
  });
}

async function handlePhotoSelection(event) {
  const files = Array.from(event.target.files || []);
  event.target.value = '';
  const available = MAX_SETUP_PHOTOS - pendingPhotos.length;
  if (available <= 0) { showToast(`Maximum ${MAX_SETUP_PHOTOS} photos par setup.`); return; }
  if (files.length > available) showToast(`Jusqu’à ${MAX_SETUP_PHOTOS} photos : seules les premières pourront être ajoutées.`);
  for (const file of files.slice(0, available)) {
    try {
      pendingPhotos.push(await compressPhoto(file));
      renderPhotoPreviews();
    } catch (error) {
      showToast(error.message || 'Impossible de charger cette photo.');
    }
  }
}
function renderCarPhotoPreviews() {
  const container=document.getElementById('carPhotoPreview');if(!container)return;
  container.replaceChildren();
  pendingCarPhotos.forEach((photo,index)=>{
    const tile=document.createElement('div');tile.className='photo-preview-tile';
    tile.innerHTML=`<img src="${photo}" alt="Aperçu de la photo ${index+1} de la voiture"><button type="button" class="photo-remove" aria-label="Retirer la photo ${index+1}">×</button>`;
    tile.querySelector('.photo-remove').addEventListener('click',()=>{pendingCarPhotos.splice(index,1);renderCarPhotoPreviews();});
    container.append(tile);
  });
  const count=document.getElementById('carPhotoCount');if(count)count.textContent=`${pendingCarPhotos.length}/3 photos`;
}
async function handleCarPhotoSelection(event) {
  const files=Array.from(event.target.files||[]);event.target.value='';
  const available=3-pendingCarPhotos.length;
  if(available<=0){showToast('Maximum 3 photos par voiture.');return;}
  if(files.length>available)showToast('Maximum 3 photos par voiture : seules les premières seront ajoutées.');
  for(const file of files.slice(0,available)){
    try{pendingCarPhotos.push(await compressPhoto(file));renderCarPhotoPreviews();}
    catch(error){showToast(error.message||'Impossible de charger cette photo.');}
  }
}

function handleSetupSubmit(event){
  event.preventDefault();const data=formValues(event.target,['carId','trackId',...SETUP_FIELDS]);for(const name of SETUP_FIELDS){if(!event.target.elements.namedItem(name))delete data[name];}data.setupName=String(event.target.elements.namedItem('setupName')?.value||'').trim();
  if(!data.carId||!data.trackId){showToast('Choisis une voiture et une piste.');return;}const now=new Date().toISOString();
  if(editingSetupId){const index=state.setups.findIndex(s=>s.id===editingSetupId);if(index<0){showToast('Setup introuvable.');return;}const previous=state.setups[index];const history=[...(previous.history||[]),{savedAt:now,data:{...previous,photos:[...(previous.photos||[])],history:[]}}].slice(-20);state.setups[index]={...previous,...data,photos:[...pendingPhotos],history,updatedAt:now};if(!saveState()){state.setups[index]=previous;return;}showToast('Setup mis à jour. Ancienne version conservée dans l’historique.');}
  else{const source=setupDraftSource;const created={...(source||{}),id:uid('setup'),...data,photos:[...pendingPhotos],favorite:false,history:[],createdAt:now,updatedAt:now};state.setups.unshift(created);if(!saveState()){state.setups.shift();return;}showToast(source?'Copie du setup enregistrée.':'Setup enregistré. Bon run !');}
  editingSetupId=null;setupDraftSource=null;pendingPhotos=[];renderPhotoPreviews();renderAll();event.target.reset();event.target.classList.add('hidden');event.target.querySelector('button[type="submit"]').textContent='Enregistrer le setup';
}

function showCarSetups(id) {
  setView('setups');
  const filter=document.getElementById('setupCarFilter');
  if(filter){filter.value=id;renderSetups();}
}
function removeCar(id) {
  const car = getCarById(id);
  if (!car || !confirm(`Supprimer « ${car.name} » et les setups associés ?`)) return;
  const previousCars=state.cars,previousSetups=state.setups;
  state.cars = state.cars.filter((entry) => entry.id !== id);
  state.setups = state.setups.filter((setup) => setup.carId !== id);
  if(!saveState()){state.cars=previousCars;state.setups=previousSetups;return;}
  renderAll(); showToast('Voiture et setups associés supprimés.');
}
function removeTrack(id) {
  const track = getTrackById(id);
  if (!track || !confirm(`Supprimer « ${track.name} » et les setups associés ?`)) return;
  const previousTracks=state.tracks,previousSetups=state.setups;
  state.tracks = state.tracks.filter((entry) => entry.id !== id);
  state.setups = state.setups.filter((setup) => setup.trackId !== id);
  if(!saveState()){state.tracks=previousTracks;state.setups=previousSetups;return;}
  renderAll(); showToast('Piste et setups associés supprimés.');
}
function removeSetup(id) {
  if (!confirm('Supprimer ce setup ?')) return;
  const previousSetups=state.setups;
  state.setups = state.setups.filter((setup) => setup.id !== id);
  if(!saveState()){state.setups=previousSetups;return;}
  renderAll(); showToast('Setup supprimé.');
}


let assistantSetupId=null;
let currentDetailSetupId=null;
let assistantLastProposal=[];
function assistantRecommendations(setup,symptom,phase){
 const car=getCarById(setup.carId),track=getTrackById(setup.trackId);
 const drivetrain=String(car?.drivetrain||car?.driveType||car?.transmission||'').toLowerCase();
 const is4wd=/4wd|4x4|4 roues|quatre roues/.test(drivetrain);
 const surface=setup.surface||track?.surface||'surface non précisée';
 const grip=setup.grip||track?.grip||'adhérence non précisée';
 const bank={
  understeer:{entry:[['Direction / train avant','Vérifie le débattement et l’absence de point dur. Essaie un peu plus de chasse ou une position de biellette qui augmente la réponse initiale, selon le châssis.'],['Pneus avant','Contrôle l’usure, le collage et l’insert. Un pneu avant plus accrocheur peut aider, sans changer plusieurs paramètres à la fois.']],mid:[['Équilibre de roulis','Essaie une barre antiroulis avant plus souple ou arrière plus ferme, si le châssis en est équipé.'],['Géométrie','Teste une légère augmentation du carrossage avant négatif et vérifie la largeur de voie.']],exit:[['Motricité / différentiel','Vérifie si le train avant pousse ou si le train arrière manque d’appui. Sur 4WD, contrôle aussi la cohérence des différentiels.'],['Pneus avant','Vérifie la température et l’état des pneus avant après quelques tours.']],all:[['Avant','Commence par l’état des pneus avant, la direction et les points durs.'],['Équilibre','Compare ensuite barre antiroulis, carrossage et répartition du grip.']]},
  oversteer:{entry:[['Stabilité au freinage','Vérifie le freinage, le pincement arrière et l’état des pneus arrière. Évite de modifier le frein et la géométrie simultanément.'],['Arrière','Essaie davantage de stabilité arrière via le réglage de pincement prévu par le fabricant.']],mid:[['Train arrière','Teste une barre antiroulis arrière plus souple ou une barre avant plus ferme, si disponible.'],['Pneus arrière','Contrôle gomme, inserts, collage et température.']],exit:[['Motricité','Réduis la brutalité de la remise des gaz et vérifie le slipper sur 2WD ou les différentiels sur 4WD.'],['Suspension arrière','Contrôle la détente, la précontrainte et l’amortissement arrière.']],all:[['Arrière','Commence par pneus, pincement arrière et liberté de suspension.'],['Équilibre','Teste ensuite une barre arrière plus souple ou une réponse moteur plus progressive.']]},
  traction:{entry:[['Pneus arrière','Vérifie gomme, inserts, diamètre et état. Sur une piste glissante, la gomme et la préparation comptent beaucoup.'],['Suspension','Contrôle que les amortisseurs travaillent librement et que les roues gardent le contact avec le sol.']],mid:[['Répartition du grip','Teste un arrière plus souple (ressort ou barre selon le symptôme) et contrôle le droop.'],['Pneus','Vérifie que les pneus ne sont ni glacés ni encrassés.']],exit:[['Transmission','Sur 2WD, vérifie le slipper et la progressivité du variateur. Sur 4WD, vérifie les différentiels et la motricité des deux trains.'],['Amortissement arrière','Un amortissement trop ferme peut empêcher le pneu de suivre le sol : teste un changement léger d’huile ou de piston.']],all:[['Pneus et contact au sol','Vérifie d’abord les pneus, inserts, amortisseurs et liberté des triangles.'],['Transmission','Contrôle le slipper en 2WD ou les différentiels en 4WD.']]},
  tractionRoll:{entry:[['Avant','Réduis éventuellement l’agressivité du train avant : barre avant plus ferme ou pneu avant moins agressif, selon le châssis.'],['Pilotage','Vérifie que le phénomène n’est pas lié à une entrée trop brusque.']],mid:[['Équilibre latéral','Contrôle la largeur de voie, la hauteur de caisse et le transfert de masse.'],['Pneus','Une gomme trop accrocheuse ou un insert trop rigide peut provoquer un retournement sur fort grip.']],exit:[['Remise des gaz','Rends la remise des gaz plus progressive et contrôle la répartition de motricité.'],['Suspension','Vérifie la détente et les butées : évite un châssis qui se soulève brutalement.']],all:[['Grip excessif','Contrôle gomme, inserts, hauteur de caisse et largeur de voie.'],['Progressivité','Adoucis les commandes avant de modifier profondément la géométrie.']]},
  bumpy:{entry:[['Avant','Vérifie que les amortisseurs ne talonnent pas et que les triangles pivotent librement.'],['Amortissement','Une huile légèrement plus fluide peut aider la roue à suivre les petites irrégularités, à confirmer par essai.']],mid:[['Suspension','Contrôle ressorts, pistons, huile et droop. Modifie un seul élément à la fois.'],['Hauteur de caisse','Vérifie que le châssis ne touche pas le sol sur les compressions.']],exit:[['Arrière','Contrôle la détente arrière et l’absence de talonnage à l’accélération.'],['Pneus','Vérifie la souplesse des inserts et la régularité des pneus.']],all:[['Liberté mécanique','Élimine d’abord les points durs, frottements et amortisseurs qui coincent.'],['Amortissement','Ajuste ensuite huile, piston et ressort par petits incréments.']]},
  jump:{entry:[['Assiette','Vérifie la hauteur de caisse et le droop avant/arrière.'],['Répartition','Un changement de gaz en l’air peut corriger l’assiette, mais vérifie d’abord le comportement au décollage.']],mid:[['Équilibre','Contrôle l’assiette au décollage, la répartition des masses et la symétrie des amortisseurs.'],['Suspension','Vérifie que les amortisseurs ne talonnent pas à la réception.']],exit:[['Réception','Contrôle la progressivité des ressorts et l’amortissement pour éviter le rebond.'],['Châssis','Vérifie les fixations d’amortisseurs et l’absence de jeu.']],all:[['Décollage','Observe si le buggy quitte la rampe à plat ou avec le nez haut/bas.'],['Réception','Contrôle les amortisseurs, la garde au sol et les jeux mécaniques.']]},
  lazy:{entry:[['Direction','Vérifie EPA, dual rate, Ackermann et points durs avant de modifier la géométrie.'],['Train avant','Essaie une réponse avant légèrement plus vive via la chasse ou le point de fixation adapté.']],mid:[['Rotation','Teste une barre arrière légèrement plus ferme ou un avant plus libre, selon les options du châssis.'],['Géométrie','Vérifie carrossage et largeur de voie.']],exit:[['Sortie','Vérifie que le différentiel ou le slipper ne freine pas la rotation et que la remise des gaz reste progressive.'],['Arrière','Contrôle l’accroche arrière : trop de grip peut empêcher la voiture de pivoter.']],all:[['Direction','Vérifie les réglages radio et la liberté mécanique.'],['Équilibre','Teste ensuite un ajustement léger de barre antiroulis et de géométrie.']]}
 };
 const phaseList=bank[symptom]?.[phase]||bank[symptom]?.all||[];
 const severity=document.getElementById('assistantSeverity')?.value||'medium';
 const scale=severity==='light'?'Commence par une petite correction.':severity==='strong'?'Fais d’abord un contrôle mécanique : une correction importante peut masquer plusieurs causes.':'Procède par petits incréments et valide sur plusieurs tours.';
 const caution=is4wd?'Transmission détectée comme 4WD : vérifie les différentiels avant, central et arrière réellement présents.':/2wd|2 roues|4x2/.test(drivetrain)?'Transmission détectée comme 2WD : concentre les essais sur le train arrière, le slipper et la progressivité moteur.':'Architecture de transmission à confirmer : les conseils de différentiel/slipper dépendent de la voiture.';
 return {car:car?.name||'Voiture non identifiée',track:track?.name||'Piste non identifiée',surface,grip,drivetrain:drivetrain||'non renseignée',caution,scale,items:phaseList};
}
function renderAssistantRecommendations(){
 const setup=state.setups.find(s=>s.id===assistantSetupId);if(!setup)return;
 const data=assistantRecommendations(setup,document.getElementById('assistantSymptom').value,document.getElementById('assistantPhase').value);
 assistantLastProposal=data.items;
 document.getElementById('assistantContext').innerHTML='<strong>'+escapeHtml(data.car)+' · '+escapeHtml(data.track)+'</strong><span>'+escapeHtml(data.surface)+' · '+escapeHtml(data.grip)+'</span><p>'+escapeHtml(data.caution)+'</p><small>'+escapeHtml(data.scale)+'</small>';
 document.getElementById('assistantRecommendations').innerHTML=data.items.map((item,index)=>'<article class="assistant-recommendation"><span class="assistant-number">'+(index+1)+'</span><div><h3>'+escapeHtml(item[0])+'</h3><p>'+escapeHtml(item[1])+'</p></div></article>').join('')+'<p class="assistant-footnote">Méthode : conserve le setup de référence, change un seul paramètre à la fois et note les chronos ainsi que le ressenti. Ces pistes sont générales et doivent être vérifiées avec le manuel du châssis.</p>';
}
function openSetupAssistant(id){
 assistantSetupId=id;const dialog=document.getElementById('setupAssistantDialog');if(!dialog)return;
 renderAssistantRecommendations();dialog.showModal();
}
function saveAssistantProposal(){
 const setup=state.setups.find(s=>s.id===assistantSetupId);if(!setup||!assistantLastProposal.length)return;
 const symptom=document.getElementById('assistantSymptom'),phase=document.getElementById('assistantPhase');
 const proposal={createdAt:new Date().toISOString(),symptom:symptom.options[symptom.selectedIndex].text,phase:phase.options[phase.selectedIndex].text,items:assistantLastProposal.map(x=>({area:x[0],advice:x[1]})),status:'À tester'};
 setup.testProposals=[...(setup.testProposals||[]),proposal].slice(-30);
 if(!saveState())return;
 document.getElementById('setupAssistantDialog').close();showSetup(setup.id);showToast('Pistes de réglage enregistrées dans le setup.');
}

function showSetup(id) {
  currentDetailSetupId=id;
  const setup = state.setups.find((entry) => entry.id === id);
  if (!setup) return;
  const car = getCarById(setup.carId);
  const track = getTrackById(setup.trackId);
  const groups = [
    ['Session', [['Date', setup.sessionDate || formatDate(setup.createdAt)], ['Température', setup.temperature], ['Surface',setup.surface||track?.surface], ['Adhérence',setup.grip||track?.grip], ['Météo', setup.weather], ['Objectif / ressenti', setup.goal], ['Notes de session', setup.sessionNotes]]],
    ['Carnet de test', [['Nombre de tours', setup.runLaps], ['Meilleur tour', setup.lapTime], ['Moyenne au tour', setup.averageLapTime], ['Régularité', setup.lapConsistency], ['Entrée de virage', setup.cornerEntry], ['Milieu de virage', setup.cornerMid], ['Sortie de virage', setup.cornerExit], ['Motricité', setup.tractionLevel], ['Stabilité', setup.stabilityLevel], ['Modifications testées', setup.testedChanges], ['Bilan du test', setup.testConclusion], ['Prochain essai', setup.nextTest]]],
    ['Pneus & roues', [['Pneus avant', setup.frontTires], ['Pneus arrière', setup.rearTires], ['Inserts avant', setup.frontInserts], ['Inserts arrière', setup.rearInserts], ['Inserts (ancienne fiche)', setup.inserts], ['Traitement pneus', setup.tireTreatment], ['État des pneus', setup.tireCondition], ['Notes pneus & inserts', setup.tiresNotes]]],
    ['Suspension & géométrie', [['Huile amortisseur avant', setup.frontShocks], ['Piston amortisseur avant', setup.frontPiston], ['Ressort avant', setup.frontSpring], ['Coupelle sous amortisseur avant', setup.frontShockCupPosition], ['Tour d’amortisseur avant',setup.frontShockTower], ['Position amortisseur avant',setup.frontShockPosition], ['Huile amortisseur arrière', setup.rearShocks], ['Piston amortisseur arrière', setup.rearPiston], ['Ressort arrière', setup.rearSpring], ['Coupelle sous amortisseur arrière', setup.rearShockCupPosition], ['Tour d’amortisseur arrière',setup.rearShockTower], ['Position amortisseur arrière',setup.rearShockPosition], ['Anciens ressorts (setup existant)', setup.springs], ['Hauteur de caisse avant', setup.frontRideHeight], ['Hauteur de caisse arrière', setup.rearRideHeight], ['Hauteur de caisse (ancienne fiche)', setup.rideHeight], ['Carrossage avant', setup.frontCamber], ['Carrossage arrière', setup.rearCamber], ['Pincement / ouverture avant', setup.frontToe], ['Pincement / ouverture arrière', setup.rearToe], ['Chasse avant', setup.frontCaster], ['Géométrie de direction (Ackermann)', setup.ackermann], ['Barre antiroulis avant', setup.frontAntiRollBar], ['Barre antiroulis arrière', setup.rearAntiRollBar], ['Débattement avant / droop', setup.frontDroop], ['Débattement arrière / droop', setup.rearDroop], ['Carrossage (ancienne fiche)', setup.camber], ['Pincement / ouverture (ancienne fiche)', setup.toe], ['Largeur de voie avant', setup.frontTrackWidth], ['Largeur de voie arrière', setup.rearTrackWidth], ['Longueur biellette avant', setup.frontLinkLength], ['Longueur biellette arrière', setup.rearLinkLength], ['Chasse / Ackermann (ancienne fiche)', setup.casterAckermann], ['Barres antiroulis (ancienne fiche)', setup.antiRollBars], ['Débattement / droop (ancienne fiche)', setup.droop], ['Lest avant', setup.frontBallastWeight], ['Lest arrière', setup.rearBallastWeight], ['Lest latéral', setup.lateralBallastWeight], ['Notes suspension & géométrie', setup.suspensionNotes]]],
    ['Transmission', [['Pignon moteur (dents)', setup.pinionTeeth || (setup.gearing ? setup.gearing.match(/pignon\s*(\d+)/i)?.[1] : '')], ['Couronne (dents)', setup.spurTeeth || (setup.gearing ? setup.gearing.match(/couronne\s*(\d+)/i)?.[1] : '')], ['Différentiel avant – configuration', setup.frontDiffType], ['Différentiel avant – huile', setup.frontDiffOil], ['Différentiel avant – graisse', setup.frontDiffGrease], ['Différentiel avant à billes – serrage', setup.frontBallDiffTightness], ['Différentiel central – configuration', setup.centerDiffType], ['Différentiel central – huile', setup.centerDiffOil], ['Différentiel central – graisse', setup.centerDiffGrease], ['Différentiel central à billes – serrage', setup.centerBallDiffTightness], ['Différentiel arrière – configuration', setup.rearDiffType], ['Différentiel arrière – huile', setup.rearDiffOil], ['Différentiel arrière – graisse', setup.rearDiffGrease], ['Différentiel arrière à billes – serrage', setup.rearBallDiffTightness], ['Slipper', setup.slipperPresence], ['Réglage du slipper – serrage de l’écrou', setup.slipper], ['Ancien type de différentiel', setup.diffType], ['Ancien différentiel à billes – serrage', setup.ballDiff], ['Moteur', setup.motor], ['Notes transmission', setup.transmissionNotes]]],
    ['Réglages variateur (ESC)', [['Variateur / modèle', setup.escModel], ['Mode de fonctionnement', setup.escMode], ['Timing moteur', setup.escMotorTiming], ['Boost / timing dynamique', setup.escBoost], ['Turbo timing', setup.escTurbo], ['Délai turbo', setup.escTurboDelay], ['Punch / puissance initiale', setup.escPunch], ['Force de freinage max', setup.escBrake], ['Drag brake', setup.escDragBrake], ['Fréquence freinage', setup.escBrakeFrequency], ['Fréquence accélération PWM', setup.escThrottleFrequency], ['Neutral range', setup.escNeutralRange], ['Cutoff batterie', setup.escCutoff], ['Tension BEC', setup.escBec], ['Protection thermique', setup.escThermal], ['Limitation marche arrière', setup.escReverse], ['Rampe de freinage', setup.escBrakeRate], ['Rampe accélération', setup.escThrottleRate], ['Autres paramètres ESC', setup.electronicsNotes], ['Notes variateur', setup.escSectionNotes]]],
    ['Réglages radio', [['Radio / émetteur', setup.txModel], ['Dual rate direction', setup.radioSteeringDualRate], ['Expo direction', setup.radioSteeringExpo], ['EPA direction', setup.radioEPA], ['Trim direction', setup.radioSteeringTrim], ['Subtrim direction', setup.radioSubtrim], ['Reverse direction', setup.radioSteeringReverse], ['Expo accélérateur', setup.radioThrottleExpo], ['EPA accélérateur', setup.radioThrottleEPA], ['Trim accélérateur / neutre', setup.radioThrottleTrim], ['Reverse accélérateur', setup.radioThrottleReverse], ['EPA frein', setup.radioBrakeEPA], ['Expo frein', setup.radioBrakeExpo], ['Failsafe', setup.radioFailsafe], ['Autres réglages radio', setup.radio], ['Notes réglages radio', setup.radioSectionNotes]]],
    ['Équipements radio', [['Récepteur / gyro', setup.rxModel], ['Servo de direction', setup.servoSteering], ['Notes équipements radio', setup.radioEquipmentNotes]]],
    ['Repères sur les photos', [['Annotations / positions repérées',setup.photoNotes]]],
    ['Bilan de session', [['Meilleur temps au tour', setup.lapTime], ['Ressenti général', setup.rating], ['Notes & prochaines modifications', setup.notes]]]
  ];
  const content = document.getElementById('setupDetails');
  const photoSection = setup.photos?.length ? `<section class="detail-group"><h3>Photos du setup</h3><div class="setup-gallery">${setup.photos.map((photo, index) => `<a href="${photo}" target="_blank" rel="noopener"><img src="${photo}" alt="Photo ${index + 1} du setup" loading="lazy"></a>`).join('')}</div></section>` : '';
  content.innerHTML = `<div class="pdf-action-banner"><div><strong>Ta fiche prête à imprimer ou enregistrer</strong><span>PDF A4 avec amortisseurs avant puis arrière, et tous les réglages classés.</span></div><button class="button button-primary pdf-main-button" id="detailPrintSetupTop" type="button">⇩ Imprimer / PDF</button></div><span class="kicker">FICHE DE RÉGLAGES</span><h2>${escapeHtml(setup.setupName ? setup.setupName+' · ' : '')}${escapeHtml(car?.name || 'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name || 'Piste inconnue')}</h2><p class="dialog-subtitle">${escapeHtml(setup.surface||track?.surface||'')} ${(setup.grip||track?.grip)?'· '+escapeHtml(setup.grip||track?.grip):''} ${setup.weather ? '· '+escapeHtml(setup.weather) : ''} ${setup.temperature ? `· ${escapeHtml(setup.temperature)}` : ''}</p>` + photoSection + groups.map(([title, fields]) => {
    const filled = fields.filter(([, value]) => value);
    if (!filled.length) return '';
    return `<section class="detail-group"><h3>${escapeHtml(title)}</h3><dl>${filled.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl></section>`;
  }).join('');
  const history=Array.isArray(setup.history)?setup.history:[];
  const proposals=Array.isArray(setup.testProposals)?setup.testProposals:[];
  content.insertAdjacentHTML('beforeend',`${proposals.length?`<section class="detail-group"><h3>Pistes de réglage enregistrées</h3>${proposals.slice().reverse().map((p,index)=>`<article class="saved-proposal"><strong>${escapeHtml(p.symptom)} · ${escapeHtml(p.phase)}</strong><small>${escapeHtml(new Date(p.createdAt).toLocaleString('fr-FR'))} · ${escapeHtml(p.status||'À tester')}</small><ul>${(p.items||[]).map(item=>`<li><b>${escapeHtml(item.area)}</b> — ${escapeHtml(item.advice)}</li>`).join('')}</ul></article>`).join('')}</section>`:''}`+`<section class="detail-group"><h3>Historique des modifications</h3>${history.length?history.map((h,index)=>`<div class="history-entry"><span>${escapeHtml(new Date(h.savedAt).toLocaleString('fr-FR'))}</span><button class="button button-quiet restore-version" data-index="${index}" type="button">Restaurer cette version</button></div>`).join(''):'<p class="item-sub">Aucune modification enregistrée pour le moment.</p>'}</section><div class="item-actions detail-actions"><button class="button button-primary" id="detailAssistantSetup" type="button">✦ Assistant de réglages</button><button class="button button-primary" id="detailEditSetup" type="button">Modifier ce setup</button><button class="button button-soft" id="detailExportSetup" type="button">Exporter ce setup</button><button class="button button-soft" id="detailPrintSetup" type="button">Imprimer / PDF</button><button class="button button-soft" id="detailDuplicateSetup" type="button">Dupliquer</button><button class="button button-soft" id="detailFavoriteSetup" type="button">${setup.favorite?'★ Retirer des favoris':'☆ Ajouter aux favoris'}</button></div>`);
  content.querySelectorAll('.restore-version').forEach(button=>button.addEventListener('click',()=>restoreSetupVersion(id,Number(button.dataset.index))));
  content.querySelector('#detailAssistantSetup').addEventListener('click',()=>openSetupAssistant(id));
  content.querySelector('#detailEditSetup').addEventListener('click',()=>{document.getElementById('setupDialog').close();openSetupEditor(id);});
  content.querySelector('#detailExportSetup').addEventListener('click',()=>exportSingleSetup(id));
  content.querySelector('#detailPrintSetup').addEventListener('click',printSetupDetails);
  content.querySelector('#detailPrintSetupTop').addEventListener('click',printSetupDetails);
  content.querySelector('#detailDuplicateSetup').addEventListener('click',()=>{document.getElementById('setupDialog').close();openSetupEditor(id,true);});
  content.querySelector('#detailFavoriteSetup').addEventListener('click',()=>{document.getElementById('setupDialog').close();toggleSetupFavorite(id);});
  document.getElementById('setupDialog').showModal();
}


function downloadJsonFile(data,filename){
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download=filename;document.body.append(link);link.click();link.remove();URL.revokeObjectURL(url);
}
function exportSingleSetup(id){
  const setup=state.setups.find(s=>s.id===id);if(!setup)return;
  const payload={format:'rc-setup-single',version:1,exportedAt:new Date().toISOString(),car:getCarById(setup.carId)||null,track:getTrackById(setup.trackId)||null,setup:{...setup}};
  const safe=(setup.setupName||getCarById(setup.carId)?.name||'setup').replace(/[^a-z0-9_-]+/gi,'-').replace(/^-|-$/g,'').slice(0,48)||'setup';
  downloadJsonFile(payload,'rc-setup-'+safe+'.json');showToast('Setup individuel exporté, prêt à être partagé.');
}
function importSingleSetup(file){
  if(!file)return;
  const reader=new FileReader();
  reader.onload=event=>{
    try{
      const payload=JSON.parse(String(event.target?.result||''));
      if(payload?.format!=='rc-setup-single'||!payload.setup||!payload.car?.name||!payload.track?.name)throw new Error('Format de setup partagé invalide');
      const carExisting=state.cars.find(c=>c.name===payload.car.name&&String(c.brand||'')===String(payload.car.brand||''));
      const trackExisting=state.tracks.find(t=>t.name===payload.track.name&&String(t.surface||'')===String(payload.track.surface||''));
      const car=carExisting||{...payload.car,id:uid('car'),createdAt:new Date().toISOString()};
      const track=trackExisting||{...payload.track,id:uid('track'),createdAt:new Date().toISOString()};
      const setup={...payload.setup,id:uid('setup'),carId:car.id,trackId:track.id,photos:Array.isArray(payload.setup.photos)?payload.setup.photos:[],history:[],favorite:false,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
      if(!confirm('Importer ce setup dans ton garage sans remplacer tes voitures, pistes, setups ou ton inventaire ?'))return;
      if(!carExisting)state.cars.unshift(car);
      if(!trackExisting)state.tracks.unshift(track);
      state.setups.unshift(setup);
      if(!saveState()){state.setups.shift();if(!carExisting)state.cars=state.cars.filter(c=>c.id!==car.id);if(!trackExisting)state.tracks=state.tracks.filter(t=>t.id!==track.id);return;}
      renderAll();showToast('Setup importé dans ton garage sans écraser tes données.');
    }catch(error){console.error(error);showToast('Fichier de setup invalide ou incompatible.');}
  };
  reader.readAsText(file);
}

function exportJson() {
  const backup = { ...state, materials: window.RCSetupMaterials?.exportData?.() || [], exportedAt: new Date().toISOString(), version: 4 };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url; link.download = `rc-setup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link); link.click(); link.remove(); URL.revokeObjectURL(url);
  showToast('Sauvegarde JSON exportée (avec les photos).');
}
function importJson(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(String(event.target?.result || ''));
      if (!parsed || !Array.isArray(parsed.cars) || !Array.isArray(parsed.tracks) || !Array.isArray(parsed.setups)) throw new Error('Format invalide');
      if (!confirm('L’import remplacera les voitures, pistes, setups et, si présents, les articles personnels de la bibliothèque. Continuer ?')) return;
      const previous={cars:state.cars,tracks:state.tracks,setups:state.setups,maintenance:state.maintenance,batteries:state.batteries};
      state.cars=parsed.cars;state.tracks=parsed.tracks;state.maintenance=Array.isArray(parsed.maintenance)?parsed.maintenance:[];if(Array.isArray(parsed.batteries))state.batteries=parsed.batteries;state.setups=parsed.setups.map(setup=>({...setup,photos:Array.isArray(setup.photos)?setup.photos:[],history:Array.isArray(setup.history)?setup.history:[]}));
      if(!saveState()){Object.assign(state,previous);return;}
      if(Array.isArray(parsed.materials)&&window.RCSetupMaterials&&!window.RCSetupMaterials.importData(parsed.materials)){Object.assign(state,previous);saveState();showToast('Import matériel impossible : les données précédentes ont été conservées.');return;}
      renderAll();populateMaintenanceCars();renderBatteries();showToast(Array.isArray(parsed.materials)?'Sauvegarde complète importée.':'Sauvegarde importée. La bibliothèque personnelle actuelle a été conservée.');
    } catch (error) {
      console.error(error); showToast('Fichier JSON invalide ou incompatible.');
    }
  };
  reader.readAsText(file);
}
const RC_SETUP_CACHE_PREFIX = 'rc-setup-';
const RC_SETUP_CURRENT_CACHE = 'rc-setup-v225';
async function clearObsoleteAppCaches() {
  if (!('caches' in window)) return;
  const cacheNames = await caches.keys();
  const obsolete = cacheNames.filter(name => name.startsWith(RC_SETUP_CACHE_PREFIX) && name !== RC_SETUP_CURRENT_CACHE);
  await Promise.all(obsolete.map(name => caches.delete(name)));
}
async function refreshAppWorker() {
  const registration = await navigator.serviceWorker.register('./sw.js?v=119', { updateViaCache: 'none' });
  await registration.update();
  await clearObsoleteAppCaches();
  return registration;
}
function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', async () => {
    try {
      // Le nouveau worker prend le contrôle sans recharger la page :
      // cela évite le clignotement au démarrage. La version actualisée
      // sera chargée à la prochaine ouverture ou via le bouton Aide.
      await refreshAppWorker();
    } catch (error) {
      console.error('Échec de la vérification automatique de RC SETUP :', error);
    }
  });
}
async function checkForAppUpdate() {
  const button = document.getElementById('checkAppUpdate');
  const status = document.getElementById('appUpdateStatus');
  if (!button || !status) return;
  if (!('serviceWorker' in navigator)) {
    status.textContent = 'Mise à jour automatique indisponible dans ce navigateur. Ouvre le lien web de RC SETUP.';
    return;
  }
  button.disabled = true;
  button.textContent = 'Nettoyage et mise à jour…';
  status.textContent = 'Recherche de la dernière version et suppression des anciens fichiers en cache. Tes voitures et réglages sont conservés.';
  try {
    await refreshAppWorker();
    status.textContent = 'Vérification terminée. Rechargement de la dernière version…';
    window.location.reload();
  } catch (error) {
    console.error('Mise à jour impossible :', error);
    status.textContent = 'La mise à jour automatique a échoué. Vérifie ta connexion puis réessaie.';
    button.disabled = false;
    button.textContent = '↻ Réessayer la mise à jour';
  }
}
function setupInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (event) => { event.preventDefault(); deferredPrompt = event; installButton.classList.remove('hidden'); });
  installButton.addEventListener('click', async () => {
    if (!deferredPrompt) { showToast('Sur iPhone : Safari → Partager → Sur l’écran d’accueil.'); return; }
    deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; installButton.classList.add('hidden');
  });
}

document.getElementById('checkAppUpdate')?.addEventListener('click', checkForAppUpdate);
document.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
document.querySelectorAll('[data-view]:not(.nav-item)').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
document.querySelectorAll('.add-entry').forEach((button) => button.addEventListener('click', () => document.getElementById(button.dataset.form).classList.toggle('hidden')));
document.querySelectorAll('[data-open-form]').forEach((button) => button.addEventListener('click', () => {
  setView(button.dataset.view);
  const form = document.getElementById(button.dataset.openForm);
  form.classList.remove('hidden');
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}));
document.querySelectorAll('[data-shortcut-view]').forEach(button=>button.addEventListener('click',()=>{
  const view=button.dataset.shortcutView;
  const targetId=button.dataset.shortcutTarget;
  setView(view);
  if(button.dataset.shortcutOpen){
    const form=document.getElementById(button.dataset.shortcutOpen);
    if(form)form.classList.remove('hidden');
  }
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    const target=document.getElementById(targetId);
    if(target)target.scrollIntoView({behavior:'smooth',block:'start'});
  }));
}));
document.querySelectorAll('[data-go-view]').forEach((button) => button.addEventListener('click', (event) => { event.preventDefault(); setView(button.dataset.goView); }));
renderCarCatalogBrandPicker();
document.getElementById('carCatalogBrandPicker')?.addEventListener('click',event=>{
  const button=event.target.closest('[data-brand]');
  if(!button)return;
  const picker=document.getElementById('carCatalogBrandPicker');
  picker.dataset.selectedBrand=picker.dataset.selectedBrand===button.dataset.brand?'':button.dataset.brand;
  updateCarCatalogOptions();
});
document.getElementById('clearCarCatalogBrand')?.addEventListener('click',()=>{
  const picker=document.getElementById('carCatalogBrandPicker');
  if(picker)picker.dataset.selectedBrand='';
  updateCarCatalogOptions();
});
document.getElementById('carCatalogDrive').addEventListener('change', updateCarCatalogOptions);
document.getElementById('carCatalogEra').addEventListener('change', updateCarCatalogOptions);
document.getElementById('carCatalogSearch').addEventListener('input', updateCarCatalogOptions);
document.getElementById('addCatalogCar').addEventListener('click', handleCarCatalogAdd);

updateCarCatalogOptions();
document.querySelectorAll('[data-car-tab]').forEach(button=>button.addEventListener('click',()=>setCarEditorTab(button.dataset.carTab)));
document.getElementById('carForm').addEventListener('submit', handleCarSubmit);
document.getElementById('carPhotosInput')?.addEventListener('change',handleCarPhotoSelection);
document.getElementById('carForm').addEventListener('reset',()=>{editingCarId=null;pendingCarPhotos=[];setTimeout(()=>{resetCarEditor();document.getElementById('carForm')?.classList.add('hidden');},0);});
document.getElementById('trackForm').addEventListener('submit', handleTrackSubmit);
document.getElementById('trackForm').addEventListener('reset', () => { editingTrackId = null; const submit=document.querySelector('#trackForm button[type=\"submit\"]'); if(submit) submit.textContent='Enregistrer'; });
document.getElementById('setupForm').addEventListener('submit', handleSetupSubmit);
document.getElementById('setupForm').elements.namedItem('carId').addEventListener('change',updateVehicleSpecificFields);
['frontDiffType','centerDiffType','rearDiffType','slipperPresence'].forEach(name=>document.getElementById('setupForm').elements.namedItem(name).addEventListener('change',updateVehicleSpecificFields));
document.getElementById('setupSearch')?.addEventListener('input',renderSetups);
['setupCarFilter','setupTrackFilter','setupSurfaceFilter','setupGripFilter','setupDateFrom','setupDateTo'].forEach(id=>document.getElementById(id)?.addEventListener('change',renderSetups));
document.getElementById('tracksideModeButton')?.addEventListener('click',()=>{const enabled=!document.body.classList.contains('trackside-mode');setTracksideMode(enabled);if(enabled)setView('setups');});
try{setTracksideMode(localStorage.getItem('rc-setup-trackside-mode')==='1');}catch{}
document.getElementById('compareSetupsButton')?.addEventListener('click',compareSetups);
document.getElementById('calculateGearingButton')?.addEventListener('click',calculateGearing);
document.getElementById('diagnoseSetupButton')?.addEventListener('click',runSetupDiagnosis);
document.getElementById('maintenanceCar')?.addEventListener('change',renderMaintenanceList);
document.getElementById('batteryForm')?.addEventListener('submit',handleBatterySubmit);
document.getElementById('batteryLogForm')?.addEventListener('submit',handleBatteryLog);
document.getElementById('maintenanceForm')?.addEventListener('submit',event=>{
 event.preventDefault();
 const carId=document.getElementById('maintenanceCar').value,part=document.getElementById('maintenancePart').value;
 if(!carId||!part)return;
 state.maintenance=Array.isArray(state.maintenance)?state.maintenance:[];
 state.maintenance.unshift({id:uid('maintenance'),carId,part,workType:document.getElementById('maintenanceWorkType').value,date:document.getElementById('maintenanceDate').value,sessions:Number(document.getElementById('maintenanceSessions').value||0),next:Number(document.getElementById('maintenanceNext').value||0),replacedParts:document.getElementById('maintenanceReplacedParts').value.trim(),notes:document.getElementById('maintenanceNotes').value.trim()});
 if(!saveState())return;
 document.getElementById('maintenancePart').value='';document.getElementById('maintenanceWorkType').value='Entretien';document.getElementById('maintenanceSessions').value='0';document.getElementById('maintenanceNext').value='';document.getElementById('maintenanceReplacedParts').value='';document.getElementById('maintenanceNotes').value='';document.getElementById('maintenanceDate').value=new Date().toISOString().slice(0,10);renderMaintenanceList();showToast('Intervention enregistrée.');
});
document.getElementById('setupPhotosInput').addEventListener('change', handlePhotoSelection);
document.getElementById('exportButton').addEventListener('click', exportJson);
document.getElementById('importInput').addEventListener('change', (event) => { importJson(event.target.files?.[0]); event.target.value = ''; });
document.getElementById('importSetupInput')?.addEventListener('change', (event) => { importSingleSetup(event.target.files?.[0]); event.target.value = ''; });
document.querySelectorAll('form').forEach(form=>form.addEventListener('reset',()=>{const keepOpen=form.id==='setupForm'&&form.dataset.preserveOnReset==='true';form.dataset.preserveOnReset='false';setTimeout(()=>{if(keepOpen){skipSetupReset=false;return;}form.classList.add('hidden');if(form.id==='setupForm'){pendingPhotos=[];editingSetupId=null;setupDraftSource=null;renderPhotoPreviews();const submit=form.querySelector('button[type="submit"]');if(submit)submit.textContent='Enregistrer le setup';}},0);}));
document.getElementById('setupDialog').addEventListener('click', (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });

function updateCarBrandPicker(){const select=document.getElementById('carBrand');if(!select)return;const value=(select.value||'').trim();if(value&&!Array.from(select.options).some(option=>option.value===value)){const option=document.createElement('option');option.value=value;option.textContent=value;select.add(option);}select.value=value;}
document.getElementById('assistantSymptom')?.addEventListener('change',renderAssistantRecommendations);
document.getElementById('assistantPhase')?.addEventListener('change',renderAssistantRecommendations);
document.getElementById('assistantSeverity')?.addEventListener('change',renderAssistantRecommendations);
document.getElementById('assistantSaveProposal')?.addEventListener('click',saveAssistantProposal);
renderAll();
populateMaintenanceCars();
renderBatteries();
document.getElementById('maintenanceDate').value=new Date().toISOString().slice(0,10);
updateCarBrandPicker();
updateVehicleSpecificFields();
setView('dashboard', false);
registerServiceWorker();
setupInstallPrompt();

