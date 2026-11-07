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
  'frontShocks', 'frontPiston', 'frontSpring', 'frontShockCupPosition', 'rearShocks', 'rearPiston', 'rearSpring', 'rearShockCupPosition', 'springs', 'frontRideHeight', 'rearRideHeight', 'rideHeight', 'frontCamber', 'rearCamber', 'frontToe', 'rearToe', 'frontCaster', 'ackermann', 'frontAntiRollBar', 'rearAntiRollBar', 'frontDroop', 'rearDroop', 'camber', 'toe', 'casterAckermann', 'antiRollBars', 'droop', 'stopsDiaphragms', 'photoNotes', 'frontShockTower', 'rearShockTower', 'frontShockPosition', 'rearShockPosition', 'frontArmPosition', 'rearArmPosition',
  'gearing', 'diffType', 'diffGearOil', 'diffBallGrease', 'differentials', 'frontDiffType', 'centerDiffType', 'rearDiffType', 'frontDiffOil', 'centerDiffOil', 'rearDiffOil', 'frontDiffGrease', 'centerDiffGrease', 'rearDiffGrease', 'frontBallDiffTightness', 'centerBallDiffTightness', 'rearBallDiffTightness', 'slipperPresence', 'slipper', 'ballDiff', 'motor', 'esc', 'servoSteering', 'brakes', 'radio',
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
      setups: Array.isArray(saved.setups) ? saved.setups : []
    };
  } catch (error) {
    console.error('Impossible de lire les données locales', error);
    return { cars: [], tracks: [], setups: [] };
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
function setView(viewName) {
  document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('active', button.dataset.view === viewName));
  document.querySelectorAll('.view').forEach((view) => view.classList.toggle('active', view.id === `${viewName}View`));
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
  const fields=[['Moteur','engineEquipment'],['Variateur / ESC','escEquipment'],['Servo','servoEquipment'],['Pneus','tiresEquipment'],['Amortisseurs','shocksEquipment']];
  const setups=state.setups.filter(setup=>setup.carId===car.id).sort((a,b)=>new Date(b.updatedAt||b.createdAt||0)-new Date(a.updatedAt||a.createdAt||0));
  const history=Array.isArray(car.partsHistory)?[...car.partsHistory].sort((a,b)=>String(b.date||'').localeCompare(String(a.date||''))):[];
  const photos=Array.isArray(car.photos)?car.photos.slice(0,3):[];
  return `<div class="car-detail-grid"><section><h4>Équipements</h4><dl class="car-equipment-list">${fields.map(([label,key])=>`<div><dt>${label}</dt><dd>${escapeHtml(car[key]||'Non renseigné')}</dd></div>`).join('')}</dl><p class="item-sub">${escapeHtml(car.type||'Type non renseigné')} · ${escapeHtml(car.scale||'Échelle non renseignée')} · ${escapeHtml(car.drive||'Transmission non renseignée')}</p></section><section><h4>Setups associés (${setups.length})</h4>${setups.length? `<ul class="car-setup-links">${setups.map(setup=>`<li><button type="button" class="text-button open-car-setup" data-id="${escapeHtml(setup.id)}">${escapeHtml(setup.setupName||setup.sessionDate||'Setup')} — ${escapeHtml(getTrackById(setup.trackId)?.name||'Piste non renseignée')}</button></li>`).join('')}</ul>`:'<p class="item-sub">Aucun setup associé pour le moment.</p>'}</section></div><section class="car-detail-section"><h4>Photos de la voiture (${photos.length}/3)</h4>${photos.length?`<div class="car-detail-photos">${photos.map((photo,index)=>`<a href="${photo}" target="_blank" rel="noopener"><img src="${photo}" alt="Photo ${index+1} de ${escapeHtml(car.name)}" loading="lazy"></a>`).join('')}</div>`:'<p class="item-sub">Ajoute jusqu’à trois photos depuis Modifier.</p>'}</section><section class="car-detail-section"><h4>Historique des pièces et modifications</h4>${history.length?`<ol class="car-parts-history">${history.map(entry=>`<li><strong>${escapeHtml(entry.part||'Modification')}</strong><span>${escapeHtml(entry.action||'Modifiée')} · ${escapeHtml(entry.date||'Date inconnue')}</span>${entry.notes?`<p>${escapeHtml(entry.notes)}</p>`:''}</li>`).join('')}</ol>`:'<p class="item-sub">Aucune pièce enregistrée. Les changements d’équipements seront ajoutés automatiquement à l’historique.</p>'}</section></div>`;
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
    item.innerHTML = `<div class="item-avatar car-avatar">🚗</div><div class="item-main"><h3>${escapeHtml(car.name)}</h3><p class="item-sub">${escapeHtml(car.brand || 'Marque / modèle non renseigné')} · ${escapeHtml(car.scale || 'Échelle non renseignée')} · ${escapeHtml(car.drive || 'Transmission non renseignée')} · ${itemType}</p><p class="item-detail">${setups} setup(s) associé(s) · ${Array.isArray(car.photos)?Math.min(3,car.photos.length):0}/3 photos</p>${car.notes ? `<p class="item-detail">${escapeHtml(car.notes)}</p>` : ''}<div class="car-card-actions"><button class="button button-soft view-car-details" data-id="${escapeHtml(car.id)}" type="button" aria-expanded="false">Fiche détaillée</button><button class="button button-soft edit-car" data-id="${escapeHtml(car.id)}" type="button">Modifier</button><button class="button button-quiet danger-action delete-car" data-id="${escapeHtml(car.id)}" type="button">Supprimer</button></div><div class="car-detail-panel hidden" id="car-detail-${escapeHtml(car.id)}">${carEquipmentMarkup(car)}</div></div>`;
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
    item.className = 'list-item entity-card';
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
  const samples=state.setups.filter(s=>parseLapTime(s.lapTime)!==null).sort((a,b)=>new Date(a.sessionDate||a.createdAt)-new Date(b.sessionDate||b.createdAt)).slice(-10);
  if(!samples.length){root.innerHTML='<p class="item-sub">Renseigne un meilleur temps dans tes setups pour afficher leur évolution.</p>';return;}
  const values=samples.map(s=>parseLapTime(s.lapTime)),best=Math.min(...values),worst=Math.max(...values);
  root.innerHTML='<div class="trend-chart">'+samples.map((s,i)=>{const v=values[i],height=worst===best?75:Math.max(18,Math.round(100-(v-best)/(worst-best)*72));return `<div class="trend-column" title="${escapeHtml(getCarById(s.carId)?.name||'Voiture')} · ${escapeHtml(s.lapTime)}"><span>${escapeHtml(s.lapTime)}</span><i style="height:${height}%"></i><small>${escapeHtml((s.sessionDate||s.createdAt||'').slice(0,10))}</small></div>`;}).join('')+'</div><p class="item-sub">Meilleur temps enregistré : <strong>'+escapeHtml(samples[values.indexOf(best)].lapTime)+'</strong> · '+samples.length+' sessions</p>';
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
    .print-mark{display:grid;place-items:center;width:42px;height:42px;background:#202832;color:#fff;font-size:15pt;font-weight:900;letter-spacing:-1.5px}
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
    .compare-table{width:100%}
    .compare-row{display:grid;grid-template-columns:1.15fr 1fr 1fr;gap:10px;padding:7px 8px;border-bottom:1px solid var(--line);break-inside:avoid;font-size:8pt}
    .compare-row:nth-child(odd):not(.compare-head){background:#f6f7f8}
    .compare-head{background:#252d36;color:#fff;font-weight:800}
    .history-entry{padding:6px 0;border-bottom:1px solid var(--line);font-size:8pt}
    .dialog-subtitle{color:var(--muted)}
    .print-footer{display:flex;justify-content:space-between;gap:15px;margin-top:22px;padding-top:9px;border-top:1px solid var(--line);color:var(--muted);font-size:7pt}
    .print-footer strong{color:var(--ink);letter-spacing:.6px}
    .item-sub,.muted{color:var(--muted)}
    button,a.button{display:none!important}
    @page{size:A4;margin:12mm 13mm 14mm}
    @media print{
      html{background:#fff}
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
    @media(max-width:650px){body{padding:0 16px}.print-overview{grid-template-columns:1fr 1fr}.print-section dl{grid-template-columns:1fr}.compare-row{grid-template-columns:1fr 1fr 1fr}}
  `;
  const buggyDiagram='';

  const overview=meta.slice(0,4).map((value,index)=>{
    const labels=['SURFACE','ADHÉRENCE','MÉTÉO','TEMPÉRATURE'];
    return '<div class="print-overview-item"><small>'+labels[index]+'</small><strong>'+escapeHtml(value)+'</strong></div>';
  }).join('');
  const printWindow=window.open('','_blank');
  if(!printWindow){showToast('Autorise les fenêtres pop-up pour imprimer la fiche.');return;}
  printWindow.document.open();
  printWindow.document.write('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+escapeHtml(heading)+' — RC SETUP</title><style>'+styles+'</style></head><body><div class="print-topline"></div><header class="print-masthead"><div class="print-brand"><span class="print-mark">RC</span><span><small>GARAGE NUMÉRIQUE</small><strong>SETUP.</strong></span></div><div class="print-edition"><b>'+escapeHtml(intro)+'</b><br>ÉDITION DU '+escapeHtml(dateLabel.toUpperCase())+'<br>'+sectionCount+' RUBRIQUES · '+filledCount+' LIGNES DE DONNÉES</div></header><main><section class="print-hero"><div class="print-kicker">'+compareHint+'</div><h1 class="print-title">'+escapeHtml(heading)+'</h1><p class="print-subtitle">'+escapeHtml(subtitle)+'</p></section><div class="print-overview">'+overview+'</div><div class="print-cover-summary"><span><strong>CONTENU DU DOSSIER</strong>'+sectionCount+' rubriques techniques</span><span><strong>DONNÉES RENSEIGNÉES</strong>'+filledCount+' valeurs enregistrées</span><span><strong>ÉDITION</strong>'+escapeHtml(dateLabel)+'</span></div><div class="print-page-two"><div class="print-page-heading"><span>RC SETUP / DOSSIER TECHNIQUE</span><strong>02 / RÉGLAGES & SUIVI</strong></div>'+sectionMarkup+'</div></main><footer class="print-footer"><span><strong>RC SETUP</strong> · FICHE TECHNIQUE PERSONNELLE</span><span>Document édité le '+escapeHtml(dateLabel)+'</span></footer></body></html>');
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
  content.innerHTML=`<div class="pdf-action-banner"><div><strong>Exporter cette comparaison en PDF</strong><span>Fiche A4 avec les différences et les chronos.</span></div><button class="button button-primary pdf-main-button" id="printCompareSetupTop" type="button">⇩ Imprimer / PDF</button></div><span class="kicker">COMPARAISON DE CONFIGURATIONS</span><h2>${escapeHtml(carA?.name||'Voiture')} ↔ ${escapeHtml(carB?.name||'Voiture')}</h2><p class="dialog-subtitle">${escapeHtml(trackA?.name||'Piste')} · ${escapeHtml(a.sessionDate||formatDate(a.createdAt))} <span class="arrow">vs</span> ${escapeHtml(trackB?.name||'Piste')} · ${escapeHtml(b.sessionDate||formatDate(b.createdAt))}</p><section class="detail-group"><h3>Chronos</h3><dl><div><dt>Setup A</dt><dd>${escapeHtml(a.lapTime||'—')}</dd></div><div><dt>Setup B</dt><dd>${escapeHtml(b.lapTime||'—')}</dd></div></dl></section><section class="detail-group"><h3>Réglages différents (${fields.length})</h3>${fields.length?`<div class="compare-table"><div class="compare-row compare-head"><strong>Réglage</strong><strong>Setup A</strong><strong>Setup B</strong></div>${fields.map(k=>`<div class="compare-row"><span>${escapeHtml(label(k))}</span><span>${escapeHtml(a[k]||'—')}</span><span>${escapeHtml(b[k]||'—')}</span></div>`).join('')}</div>`:'<p class="item-sub">Les réglages enregistrés sont identiques.</p>'}</section><div class="item-actions detail-actions"><button class="button button-primary" id="printSetupDetails" type="button">Imprimer / PDF</button></div>`;
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
  const advice={
    understeer_entry:['Vérifie d’abord le train avant : pneus avant, pincement/ouverture, chasse et liberté de direction.','Teste une seule modification à la fois, par exemple un peu plus de pincement avant ou un avant légèrement plus souple.'],
    understeer_mid:['Contrôle le roulis et le grip latéral : ressorts, huile/pistons, hauteur de caisse et différentiel avant si présent.','Évite de modifier simultanément les deux trains ; note le ressenti au milieu du virage.'],
    understeer_exit:['Contrôle la motricité et la répartition de grip à la remise des gaz.','Adoucis progressivement la commande des gaz à la radio/ESC et vérifie le différentiel ou slipper selon l’architecture.'],
    oversteer_entry:['Vérifie la stabilité au freinage et au lever de gaz, puis le pincement arrière et l’état des pneus.','Teste une petite augmentation de stabilité arrière avant de toucher à la puissance moteur.'],
    oversteer_mid:['Vérifie le grip arrière latéral, les pneus, la hauteur arrière et la progressivité de la suspension.','Sur faible grip, privilégie des changements modestes et conserve une motricité régulière.'],
    oversteer_exit:['Vérifie pneus arrière, slipper/différentiel et progressivité des gaz.','Réduis d’abord l’agressivité de l’accélération (punch, expo gaz) avant de changer plusieurs paramètres mécaniques.'],
    traction:['Contrôle pneus/inserts, transfert de charge et différentiel ou slipper.','Sur faible grip, évite de rendre l’accélération trop brutale ; compare ensuite un seul réglage de suspension.'],
    instability:['Contrôle hauteur de caisse, droop, amortisseurs, jeu mécanique et répartition des masses.','Vérifie aussi que les pneus sont propres et adaptés à la surface avant d’intervenir sur la géométrie.']
  };
  const lines=advice[symptom]||[];
  const gripText=grip==='low'?'Contexte faible grip : recherche une voiture progressive et évite les changements extrêmes.':grip==='high'?'Contexte fort grip : vérifie que la voiture ne roule pas excessivement sur ses suspensions.':'Adapte les essais à l’adhérence réelle de la piste.';
  output.innerHTML='<strong>Pistes à tester — '+(drive==='2wd'?'2WD':drive==='4wd'?'4WD':'architecture non précisée')+'</strong><ol>'+lines.map(x=>'<li>'+x+'</li>').join('')+'</ol><p class="item-sub">'+gripText+'</p><p class="item-sub">Ce sont des pistes de diagnostic, pas une recette universelle : note le réglage de départ et ne change qu’un paramètre à la fois.</p>';
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
  carSelect.innerHTML = '<option value="">Choisir une voiture</option>' + state.cars.map((car) => `<option value="${escapeHtml(car.id)}">${escapeHtml(car.name)}</option>`).join('');
  trackSelect.innerHTML = '<option value="">Choisir une piste</option>' + state.tracks.map((track) => `<option value="${escapeHtml(track.id)}">${escapeHtml(track.name)}</option>`).join('');
  if (state.cars.some((car) => car.id === selectedCar)) carSelect.value = selectedCar;
  if (state.tracks.some((track) => track.id === selectedTrack)) trackSelect.value = selectedTrack;
}
function renderAll() { renderDashboard(); renderCars(); renderTracks(); renderSetups(); populateSelects(); }
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
  for(const name of ['name','brand','scale','drive','type','notes','engineEquipment','escEquipment','servoEquipment','tiresEquipment','shocksEquipment']){const field=form.elements.namedItem(name);if(field)field.value=name==='drive'?normalizeDriveType(car[name]):(car[name]||'');}const diffField=form.elements.namedItem('diffCount');if(diffField)diffField.value=car.diffCount?String(car.diffCount):'auto';
  pendingCarPhotos=Array.isArray(car.photos)?car.photos.slice(0,3):[];
  renderCarPhotoPreviews();
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
  updateCarBrandPicker();
}
function handleCarSubmit(event) {
  event.preventDefault();
  const data = formValues(event.target, ['name', 'brand', 'scale', 'drive', 'type', 'diffCount', 'notes', 'engineEquipment', 'escEquipment', 'servoEquipment', 'tiresEquipment', 'shocksEquipment', 'historyPart', 'historyAction', 'historyNotes', 'historyDate']);
  if (!data.name) return;
  data.drive=normalizeDriveType(data.drive);data.diffCount=data.diffCount==='auto'?inferDifferentialCount(data):Math.min(3,Math.max(1,Number(data.diffCount)||inferDifferentialCount(data)));
  if(editingCarId){
    const car=getCarById(editingCarId);if(!car){showToast('Voiture introuvable.');return;}
    const previous={...car};
    const now=new Date().toISOString(), history=[...(car.partsHistory||[])];
    for(const [key,label] of [['engineEquipment','Moteur'],['escEquipment','Variateur / ESC'],['servoEquipment','Servo'],['tiresEquipment','Pneus'],['shocksEquipment','Amortisseurs']]){
      const before=String(car[key]||'').trim(),after=String(data[key]||'').trim();
      if(before!==after&&(before||after))history.unshift({date:now.slice(0,10),part:label,action:before?'Remplacement / modification':'Ajout',notes:`${before||'Non renseigné'} → ${after||'Retiré'}`});
    }
    if(data.historyPart.trim())history.unshift({date:data.historyDate||now.slice(0,10),part:data.historyPart.trim(),action:data.historyAction||'Remplacement',notes:data.historyNotes.trim()});
    delete data.historyPart;delete data.historyAction;delete data.historyNotes;delete data.historyDate;
    Object.assign(car,data,{partsHistory:history.slice(0,100),photos:[...pendingCarPhotos],updatedAt:now});
    if(!saveState()){Object.assign(car,previous);return;}
    showToast('Fiche voiture, équipements et historique mis à jour.');
  }else{
    const now=new Date().toISOString(),partsHistory=[];
    if(data.historyPart.trim())partsHistory.push({date:data.historyDate||now.slice(0,10),part:data.historyPart.trim(),action:data.historyAction||'Ajout',notes:data.historyNotes.trim()});
    delete data.historyPart;delete data.historyAction;delete data.historyNotes;delete data.historyDate;
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
    ['Suspension & géométrie', [['Huile amortisseur avant', setup.frontShocks], ['Piston amortisseur avant', setup.frontPiston], ['Ressort avant', setup.frontSpring], ['Coupelle sous amortisseur avant', setup.frontShockCupPosition], ['Tour d’amortisseur avant',setup.frontShockTower], ['Position amortisseur avant',setup.frontShockPosition], ['Huile amortisseur arrière', setup.rearShocks], ['Piston amortisseur arrière', setup.rearPiston], ['Ressort arrière', setup.rearSpring], ['Coupelle sous amortisseur arrière', setup.rearShockCupPosition], ['Tour d’amortisseur arrière',setup.rearShockTower], ['Position amortisseur arrière',setup.rearShockPosition], ['Anciens ressorts (setup existant)', setup.springs], ['Hauteur de caisse avant', setup.frontRideHeight], ['Hauteur de caisse arrière', setup.rearRideHeight], ['Hauteur de caisse (ancienne fiche)', setup.rideHeight], ['Carrossage avant', setup.frontCamber], ['Carrossage arrière', setup.rearCamber], ['Pincement / ouverture avant', setup.frontToe], ['Pincement / ouverture arrière', setup.rearToe], ['Chasse avant', setup.frontCaster], ['Géométrie de direction (Ackermann)', setup.ackermann], ['Barre antiroulis avant', setup.frontAntiRollBar], ['Barre antiroulis arrière', setup.rearAntiRollBar], ['Débattement avant / droop', setup.frontDroop], ['Débattement arrière / droop', setup.rearDroop], ['Carrossage (ancienne fiche)', setup.camber], ['Pincement / ouverture (ancienne fiche)', setup.toe], ['Chasse / Ackermann (ancienne fiche)', setup.casterAckermann], ['Barres antiroulis (ancienne fiche)', setup.antiRollBars], ['Débattement / droop (ancienne fiche)', setup.droop], ['Lest avant', setup.frontBallastWeight], ['Lest arrière', setup.rearBallastWeight], ['Lest latéral', setup.lateralBallastWeight], ['Notes suspension & géométrie', setup.suspensionNotes]]],
    ['Transmission', [['Rapport / pignon-couronne', setup.gearing], ['Différentiel avant – configuration', setup.frontDiffType], ['Différentiel avant – huile', setup.frontDiffOil], ['Différentiel avant – graisse', setup.frontDiffGrease], ['Différentiel avant à billes – serrage', setup.frontBallDiffTightness], ['Différentiel central – configuration', setup.centerDiffType], ['Différentiel central – huile', setup.centerDiffOil], ['Différentiel central – graisse', setup.centerDiffGrease], ['Différentiel central à billes – serrage', setup.centerBallDiffTightness], ['Différentiel arrière – configuration', setup.rearDiffType], ['Différentiel arrière – huile', setup.rearDiffOil], ['Différentiel arrière – graisse', setup.rearDiffGrease], ['Différentiel arrière à billes – serrage', setup.rearBallDiffTightness], ['Slipper', setup.slipperPresence], ['Réglage du slipper – serrage de l’écrou', setup.slipper], ['Ancien type de différentiel', setup.diffType], ['Ancien différentiel à billes – serrage', setup.ballDiff], ['Moteur', setup.motor], ['Notes transmission', setup.transmissionNotes]]],
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
      const previous={cars:state.cars,tracks:state.tracks,setups:state.setups};
      state.cars=parsed.cars;state.tracks=parsed.tracks;state.setups=parsed.setups.map(setup=>({...setup,photos:Array.isArray(setup.photos)?setup.photos:[],history:Array.isArray(setup.history)?setup.history:[]}));
      if(!saveState()){Object.assign(state,previous);return;}
      if(Array.isArray(parsed.materials)&&window.RCSetupMaterials&&!window.RCSetupMaterials.importData(parsed.materials)){Object.assign(state,previous);saveState();showToast('Import matériel impossible : les données précédentes ont été conservées.');return;}
      renderAll();showToast(Array.isArray(parsed.materials)?'Sauvegarde complète importée.':'Sauvegarde importée. La bibliothèque personnelle actuelle a été conservée.');
    } catch (error) {
      console.error(error); showToast('Fichier JSON invalide ou incompatible.');
    }
  };
  reader.readAsText(file);
}
function registerServiceWorker() {
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js?v=92').catch((error) => console.error('Échec du service worker :', error)));
}
async function checkForAppUpdate() {
  const button = document.getElementById('checkAppUpdate');
  const status = document.getElementById('appUpdateStatus');
  if (!button || !status) return;
  if (!('serviceWorker' in navigator)) {
    status.textContent = 'La mise à jour automatique n’est pas disponible dans ce navigateur.';
    return;
  }
  button.disabled = true;
  button.textContent = 'Vérification en cours…';
  status.textContent = 'Recherche de la dernière version…';
  let updateDetected = false;
  let reloading = false;
  const reloadOnce = () => {
    if (reloading) return;
    reloading = true;
    status.textContent = 'Mise à jour installée. Rechargement…';
    window.location.reload();
  };
  const onControllerChange = () => reloadOnce();
  navigator.serviceWorker.addEventListener('controllerchange', onControllerChange, { once: true });
  try {
    const registration = await navigator.serviceWorker.getRegistration('./');
    if (!registration) {
      await navigator.serviceWorker.register('./sw.js?v=92');
      status.textContent = 'Application initialisée. Recharge la page pour terminer.';
      button.disabled = false;
      button.textContent = '↻ Rechercher une mise à jour';
      return;
    }
    const watchInstallingWorker = (worker) => {
      if (!worker) return;
      updateDetected = true;
      worker.addEventListener('statechange', () => {
        if (worker.state === 'installed') {
          status.textContent = 'Nouvelle version installée. Rechargement…';
          if (navigator.serviceWorker.controller) reloadOnce();
          else {
            button.disabled = false;
            button.textContent = '↻ Rechercher une mise à jour';
            status.textContent = 'Mise à jour prête. Ferme puis relance RC SETUP.';
          }
        }
      });
    };
    registration.addEventListener('updatefound', () => watchInstallingWorker(registration.installing));
    if (registration.installing) watchInstallingWorker(registration.installing);
    await registration.update();
    if (!updateDetected && !registration.installing && !registration.waiting) {
      status.textContent = 'RC SETUP est déjà à jour.';
      button.disabled = false;
      button.textContent = '↻ Vérifier à nouveau';
      navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
    } else if (registration.waiting) {
      status.textContent = 'Nouvelle version prête. Rechargement…';
      if (navigator.serviceWorker.controller) reloadOnce();
    }
  } catch (error) {
    console.error('Vérification de mise à jour impossible :', error);
    status.textContent = 'Impossible de vérifier la mise à jour. Vérifie ta connexion puis réessaie.';
    button.disabled = false;
    button.textContent = '↻ Réessayer';
    navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
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
document.getElementById('setupPhotosInput').addEventListener('change', handlePhotoSelection);
document.getElementById('exportButton').addEventListener('click', exportJson);
document.getElementById('importInput').addEventListener('change', (event) => { importJson(event.target.files?.[0]); event.target.value = ''; });
document.getElementById('importSetupInput')?.addEventListener('change', (event) => { importSingleSetup(event.target.files?.[0]); event.target.value = ''; });
document.querySelectorAll('form').forEach(form=>form.addEventListener('reset',()=>{const keepOpen=form.id==='setupForm'&&form.dataset.preserveOnReset==='true';form.dataset.preserveOnReset='false';setTimeout(()=>{if(keepOpen){skipSetupReset=false;return;}form.classList.add('hidden');if(form.id==='setupForm'){pendingPhotos=[];editingSetupId=null;setupDraftSource=null;renderPhotoPreviews();const submit=form.querySelector('button[type="submit"]');if(submit)submit.textContent='Enregistrer le setup';}},0);}));
document.getElementById('setupDialog').addEventListener('click', (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });

document.getElementById('carBrandPicker')?.addEventListener('click',event=>{const button=event.target.closest('[data-brand]');if(!button)return;const input=document.getElementById('carBrand');if(input)input.value=button.dataset.brand;updateCarBrandPicker();});
document.getElementById('carBrand')?.addEventListener('input',updateCarBrandPicker);
function updateCarBrandPicker(){const input=document.getElementById('carBrand');const value=(input?.value||'').trim().toLocaleLowerCase('fr');document.querySelectorAll('#carBrandPicker [data-brand]').forEach(button=>{const active=button.dataset.brand.toLocaleLowerCase('fr')===value;button.classList.toggle('selected',active);button.setAttribute('aria-pressed',String(active));});}
document.getElementById('assistantSymptom')?.addEventListener('change',renderAssistantRecommendations);
document.getElementById('assistantPhase')?.addEventListener('change',renderAssistantRecommendations);
document.getElementById('assistantSeverity')?.addEventListener('change',renderAssistantRecommendations);
document.getElementById('assistantSaveProposal')?.addEventListener('click',saveAssistantProposal);
renderAll();
updateCarBrandPicker();
updateVehicleSpecificFields();
setView('dashboard');
registerServiceWorker();
setupInstallPrompt();

