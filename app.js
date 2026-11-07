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
    "drive": "4WD",
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
  }
];
const MAX_PHOTO_BYTES = 12 * 1024 * 1024;
const SETUP_FIELDS = [
  'sessionDate', 'temperature', 'weather', 'goal', 'lubricants',
  'frontTires', 'rearTires', 'inserts', 'tireTreatment', 'wheels', 'tireCondition',
  'frontShocks', 'frontPiston', 'frontSpring', 'rearShocks', 'rearPiston', 'rearSpring', 'springs', 'frontRideHeight', 'rearRideHeight', 'rideHeight', 'frontCamber', 'rearCamber', 'frontToe', 'rearToe', 'frontCaster', 'ackermann', 'frontAntiRollBar', 'rearAntiRollBar', 'frontDroop', 'rearDroop', 'camber', 'toe', 'casterAckermann', 'antiRollBars', 'droop', 'stopsDiaphragms',
  'gearing', 'differentials', 'centerDiff', 'motor', 'esc', 'servoSteering', 'brakes', 'battery', 'radio',
  'escModel', 'escMode', 'escMotorTiming', 'escBoost', 'escTurbo', 'escTurboDelay', 'escTiming', 'escPunch', 'escBrake', 'escDragBrake', 'escBrakeFrequency', 'escThrottleFrequency', 'escNeutralRange', 'escCutoff', 'escBec', 'escThermal', 'escReverse', 'escBrakeRate', 'escThrottleRate', 'electronicsNotes', 'esc', 'radio', 'radioSteeringDualRate', 'radioSteeringExpo', 'radioEPA', 'radioSteeringTrim', 'radioSubtrim', 'radioSteeringReverse', 'radioThrottleExpo', 'radioThrottleEPA', 'radioThrottleTrim', 'radioThrottleReverse', 'radioBrakeEPA', 'radioBrakeExpo', 'radioFailsafe', 'radioTrim', 'txModel', 'rxModel', 'lapTime', 'rating', 'notes'
];

const state = loadState();
const installButton = document.getElementById('installButton');
let deferredPrompt = null;
let toastTimer;
let pendingPhotos = [];
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
  const recent = [...state.setups].sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)).slice(0, 4);
  if (!recent.length) { container.append(emptyState()); return; }
  recent.forEach((setup) => {
    const car = getCarById(setup.carId);
    const track = getTrackById(setup.trackId);
    const item = document.createElement('article');
    item.className = 'list-item setup-list-item';
    item.innerHTML = `<div class="item-avatar">⚙</div><div class="item-main"><h3>${escapeHtml(car?.name || 'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name || 'Piste inconnue')}</h3><p class="item-sub">${escapeHtml(setup.weather || 'Conditions non renseignées')} · ${escapeHtml(setup.temperature || 'Température —')}</p></div><button class="icon-button view-setup" data-id="${escapeHtml(setup.id)}" aria-label="Voir le setup" type="button">↗</button>`;
    container.append(item);
  });
  container.querySelectorAll('.view-setup').forEach((button) => button.addEventListener('click', () => showSetup(button.dataset.id)));
}

function renderCars() {
  const container = document.getElementById('carsList');
  container.replaceChildren();
  if (!state.cars.length) { container.append(emptyState()); return; }
  state.cars.forEach((car) => {
    const item = document.createElement('article');
    item.className = 'list-item entity-card';
    item.innerHTML = `<div class="item-avatar car-avatar">🚗</div><div class="item-main"><h3>${escapeHtml(car.name)}</h3><p class="item-sub">${escapeHtml(car.brand || 'Marque / modèle non renseigné')} ${car.scale ? `· ${escapeHtml(car.scale)}` : ''}${car.drive ? ` · ${escapeHtml(car.drive)}` : ''}</p>${car.notes ? `<p class="item-detail">${escapeHtml(car.notes)}</p>` : ''}</div><button class="icon-button danger-action delete-car" data-id="${escapeHtml(car.id)}" aria-label="Supprimer ${escapeHtml(car.name)}" type="button">×</button>`;
    container.append(item);
  });
  container.querySelectorAll('.delete-car').forEach((button) => button.addEventListener('click', () => removeCar(button.dataset.id)));
}

function renderTracks() {
  const container = document.getElementById('tracksList');
  container.replaceChildren();
  if (!state.tracks.length) { container.append(emptyState()); return; }
  state.tracks.forEach((track) => {
    const item = document.createElement('article');
    item.className = 'list-item entity-card';
    item.innerHTML = `<div class="item-avatar track-avatar">🏁</div><div class="item-main"><h3>${escapeHtml(track.name)}</h3><p class="item-sub">${escapeHtml(track.surface || 'Surface non renseignée')} ${track.type ? `· ${escapeHtml(track.type)}` : ''} ${track.location ? `· ${escapeHtml(track.location)}` : ''}</p>${track.details ? `<p class="item-detail">${escapeHtml(track.details)}</p>` : ''}</div><button class="icon-button danger-action delete-track" data-id="${escapeHtml(track.id)}" aria-label="Supprimer ${escapeHtml(track.name)}" type="button">×</button>`;
    container.append(item);
  });
  container.querySelectorAll('.delete-track').forEach((button) => button.addEventListener('click', () => removeTrack(button.dataset.id)));
}

function renderSetups() {
  const container = document.getElementById('setupsList');
  container.replaceChildren();
  if (!state.setups.length) { container.append(emptyState()); return; }
  [...state.setups].sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0)).forEach((setup) => {
    const car = getCarById(setup.carId);
    const track = getTrackById(setup.trackId);
    const item = document.createElement('article');
    item.className = 'list-item setup-card';
    item.innerHTML = `<div class="setup-card-top"><span class="setup-tag">SETUP</span><span class="setup-date">${escapeHtml(setup.sessionDate || formatDate(setup.createdAt))}</span></div><div class="item-main"><h3>${escapeHtml(car?.name || 'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name || 'Piste inconnue')}</h3><p class="item-sub">${escapeHtml(setup.weather || 'Conditions non renseignées')} · ${escapeHtml(setup.temperature || 'Température —')}</p></div>${setup.photos?.length ? `<div class="setup-photo-strip">${setup.photos.slice(0, 3).map((photo) => `<img src="${photo}" alt="Photo du setup" loading="lazy">`).join('')}<span>${setup.photos.length} photo${setup.photos.length > 1 ? 's' : ''}</span></div>` : ''}<div class="setup-chips">${setup.frontTires || setup.rearTires ? `<span>Pneus · ${escapeHtml(setup.frontTires || '—')} / ${escapeHtml(setup.rearTires || '—')}</span>` : ''}${setup.lapTime ? `<span>⏱ ${escapeHtml(setup.lapTime)}</span>` : ''}${setup.rating ? `<span>${escapeHtml(setup.rating)}</span>` : ''}</div><div class="item-actions"><button class="button button-soft view-setup" data-id="${escapeHtml(setup.id)}" type="button">Voir les détails</button><button class="button button-quiet danger-action delete-setup" data-id="${escapeHtml(setup.id)}" type="button">Supprimer</button></div>`;
    container.append(item);
  });
  container.querySelectorAll('.view-setup').forEach((button) => button.addEventListener('click', () => showSetup(button.dataset.id)));
  container.querySelectorAll('.delete-setup').forEach((button) => button.addEventListener('click', () => removeSetup(button.dataset.id)));
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
    brand: document.getElementById('carCatalogBrand')?.value || '',
    era: document.getElementById('carCatalogEra')?.value || '',
    query: (document.getElementById('carCatalogSearch')?.value || '').trim().toLocaleLowerCase('fr')
  };
}
function updateCarCatalogOptions() {
  const { brand, era, query } = getCatalogFilters();
  const select = document.getElementById('carCatalogModel');
  if (!select) return;
  const filtered = CAR_CATALOG.map((model, index) => ({ model, index })).filter(({model}) =>
    (!brand || model.brand === brand) && (!era || model.era === era) &&
    (!query || (model.name + ' ' + model.brand + ' ' + model.type + ' ' + model.scale).toLocaleLowerCase('fr').includes(query))
  );
  select.innerHTML = '<option value="">Choisir un modèle…</option>' + filtered.map(({model,index}) =>
    '<option value="' + index + '">' + escapeHtml(model.name + ' · ' + model.scale + ' · ' + model.drive + ' · ' + model.type) + '</option>'
  ).join('');
  const count = document.getElementById('carCatalogCount');
  if (count) count.textContent = filtered.length + ' modèles disponibles';
}
function handleCarCatalogAdd() {
  const selected = document.getElementById('carCatalogModel')?.value;
  if (selected === '' || selected == null) { showToast('Choisis d’abord un modèle.'); return; }
  const model = CAR_CATALOG[Number(selected)];
  if (!model) return;
  state.cars.unshift({ id: uid('car'), name: model.name, brand: model.brand, scale: model.scale, drive: model.drive, type: model.type, era: model.era, createdAt: new Date().toISOString() });
  saveState(); renderAll();
  document.getElementById('carCatalogModel').value = '';
  showToast(model.name + ' ajouté au garage.');
}
function handleCarSubmit(event) {
  event.preventDefault();
  const data = formValues(event.target, ['name', 'brand', 'scale', 'drive', 'notes']);
  if (!data.name) return;
  state.cars.unshift({ id: uid('car'), ...data, createdAt: new Date().toISOString() });
  saveState(); renderAll(); event.target.reset(); event.target.classList.add('hidden'); showToast('Voiture personnalisée ajoutée au garage.');
}
function handleTrackSubmit(event) {
  event.preventDefault();
  const data = formValues(event.target, ['name', 'surface', 'type', 'location', 'details']);
  if (!data.name) return;
  state.tracks.unshift({ id: uid('track'), ...data, createdAt: new Date().toISOString() });
  saveState(); renderAll(); event.target.reset(); event.target.classList.add('hidden'); showToast('Piste ajoutée à ton carnet.');
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

function handleSetupSubmit(event) {
  event.preventDefault();
  const data = formValues(event.target, ['carId', 'trackId', ...SETUP_FIELDS]);
  if (!data.carId || !data.trackId) { showToast('Choisis une voiture et une piste.'); return; }
  const now = new Date().toISOString();
  state.setups.unshift({ id: uid('setup'), ...data, photos: [...pendingPhotos], createdAt: now, updatedAt: now });
  if (!saveState()) { state.setups.shift(); return; }
  pendingPhotos = [];
  renderPhotoPreviews();
  renderAll(); event.target.reset(); event.target.classList.add('hidden'); showToast('Setup enregistré. Bon run !');
}

function removeCar(id) {
  const car = getCarById(id);
  if (!car || !confirm(`Supprimer « ${car.name} » et les setups associés ?`)) return;
  state.cars = state.cars.filter((entry) => entry.id !== id);
  state.setups = state.setups.filter((setup) => setup.carId !== id);
  saveState(); renderAll(); showToast('Voiture et setups associés supprimés.');
}
function removeTrack(id) {
  const track = getTrackById(id);
  if (!track || !confirm(`Supprimer « ${track.name} » et les setups associés ?`)) return;
  state.tracks = state.tracks.filter((entry) => entry.id !== id);
  state.setups = state.setups.filter((setup) => setup.trackId !== id);
  saveState(); renderAll(); showToast('Piste et setups associés supprimés.');
}
function removeSetup(id) {
  if (!confirm('Supprimer ce setup ?')) return;
  state.setups = state.setups.filter((setup) => setup.id !== id);
  saveState(); renderAll(); showToast('Setup supprimé.');
}

function showSetup(id) {
  const setup = state.setups.find((entry) => entry.id === id);
  if (!setup) return;
  const car = getCarById(setup.carId);
  const track = getTrackById(setup.trackId);
  const groups = [
    ['Session', [['Date', setup.sessionDate || formatDate(setup.createdAt)], ['Température', setup.temperature], ['Météo / adhérence', setup.weather], ['Objectif / ressenti', setup.goal]]],
    ['Pneus & roues', [['Pneus avant', setup.frontTires], ['Pneus arrière', setup.rearTires], ['Inserts', setup.inserts], ['Traitement pneus', setup.tireTreatment], ['Jantes / largeur', setup.wheels], ['État des pneus', setup.tireCondition]]],
    ['Suspension & géométrie', [['Huile amortisseur avant', setup.frontShocks], ['Piston amortisseur avant', setup.frontPiston], ['Ressort avant', setup.frontSpring], ['Huile amortisseur arrière', setup.rearShocks], ['Piston amortisseur arrière', setup.rearPiston], ['Ressort arrière', setup.rearSpring], ['Anciens ressorts (setup existant)', setup.springs], ['Hauteur de caisse avant', setup.frontRideHeight], ['Hauteur de caisse arrière', setup.rearRideHeight], ['Hauteur de caisse (ancienne fiche)', setup.rideHeight], ['Carrossage avant', setup.frontCamber], ['Carrossage arrière', setup.rearCamber], ['Pincement / ouverture avant', setup.frontToe], ['Pincement / ouverture arrière', setup.rearToe], ['Chasse avant', setup.frontCaster], ['Ackermann', setup.ackermann], ['Barre antiroulis avant', setup.frontAntiRollBar], ['Barre antiroulis arrière', setup.rearAntiRollBar], ['Débattement avant / droop', setup.frontDroop], ['Débattement arrière / droop', setup.rearDroop], ['Carrossage (ancienne fiche)', setup.camber], ['Pincement / ouverture (ancienne fiche)', setup.toe], ['Chasse / Ackermann (ancienne fiche)', setup.casterAckermann], ['Barres antiroulis (ancienne fiche)', setup.antiRollBars], ['Débattement / droop (ancienne fiche)', setup.droop], ['Butées / membranes', setup.stopsDiaphragms]]],
    ['Transmission', [['Rapport / pignon-couronne', setup.gearing], ['Différentiels AV / AR', setup.differentials], ['Différentiel central', setup.centerDiff], ['Moteur', setup.motor]]],
    ['Réglages variateur (ESC)', [['Variateur / modèle', setup.escModel], ['Mode de fonctionnement', setup.escMode], ['Timing moteur', setup.escMotorTiming], ['Boost / timing dynamique', setup.escBoost], ['Turbo timing', setup.escTurbo], ['Délai turbo', setup.escTurboDelay], ['Punch / puissance initiale', setup.escPunch], ['Force de freinage max', setup.escBrake], ['Drag brake', setup.escDragBrake], ['Fréquence freinage', setup.escBrakeFrequency], ['Fréquence accélération PWM', setup.escThrottleFrequency], ['Neutral range', setup.escNeutralRange], ['Cutoff batterie', setup.escCutoff], ['Tension BEC', setup.escBec], ['Protection thermique', setup.escThermal], ['Limitation marche arrière', setup.escReverse], ['Rampe de freinage', setup.escBrakeRate], ['Rampe accélération', setup.escThrottleRate], ['Autres paramètres ESC', setup.electronicsNotes]]],
    ['Réglages radio', [['Radio / émetteur', setup.txModel], ['Dual rate direction', setup.radioSteeringDualRate], ['Expo direction', setup.radioSteeringExpo], ['EPA direction', setup.radioEPA], ['Trim direction', setup.radioSteeringTrim], ['Subtrim direction', setup.radioSubtrim], ['Reverse direction', setup.radioSteeringReverse], ['Expo accélérateur', setup.radioThrottleExpo], ['EPA accélérateur', setup.radioThrottleEPA], ['Trim accélérateur / neutre', setup.radioThrottleTrim], ['Reverse accélérateur', setup.radioThrottleReverse], ['EPA frein', setup.radioBrakeEPA], ['Expo frein', setup.radioBrakeExpo], ['Failsafe', setup.radioFailsafe], ['Autres réglages radio', setup.radio]]],
    ['Équipements radio', [['Récepteur / gyro', setup.rxModel], ['Servo de direction', setup.servoSteering]]],
    ['Entretien & lubrification', [['Graisses et huiles d’entretien', setup.lubricants]]],
    ['Bilan de session', [['Meilleur temps au tour', setup.lapTime], ['Ressenti général', setup.rating], ['Notes & prochaines modifications', setup.notes]]]
  ];
  const content = document.getElementById('setupDetails');
  const photoSection = setup.photos?.length ? `<section class="detail-group"><h3>Photos du setup</h3><div class="setup-gallery">${setup.photos.map((photo, index) => `<a href="${photo}" target="_blank" rel="noopener"><img src="${photo}" alt="Photo ${index + 1} du setup" loading="lazy"></a>`).join('')}</div></section>` : '';
  content.innerHTML = `<span class="kicker">FICHE DE RÉGLAGES</span><h2>${escapeHtml(car?.name || 'Voiture inconnue')} <span class="arrow">→</span> ${escapeHtml(track?.name || 'Piste inconnue')}</h2><p class="dialog-subtitle">${escapeHtml(track?.surface || '')} ${track?.surface && setup.weather ? '·' : ''} ${escapeHtml(setup.weather || '')} ${setup.temperature ? `· ${escapeHtml(setup.temperature)}` : ''}</p>` + photoSection + groups.map(([title, fields]) => {
    const filled = fields.filter(([, value]) => value);
    if (!filled.length) return '';
    return `<section class="detail-group"><h3>${escapeHtml(title)}</h3><dl>${filled.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl></section>`;
  }).join('');
  document.getElementById('setupDialog').showModal();
}

function exportJson() {
  const blob = new Blob([JSON.stringify({ ...state, exportedAt: new Date().toISOString(), version: 3 }, null, 2)], { type: 'application/json' });
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
      if (!confirm('L’import remplacera les données présentes sur cet appareil. Continuer ?')) return;
      state.cars = parsed.cars; state.tracks = parsed.tracks; state.setups = parsed.setups.map((setup) => ({ ...setup, photos: Array.isArray(setup.photos) ? setup.photos : [] }));
      if (saveState()) { renderAll(); showToast('Sauvegarde importée.'); }
    } catch (error) {
      console.error(error); showToast('Fichier JSON invalide ou incompatible.');
    }
  };
  reader.readAsText(file);
}
function registerServiceWorker() {
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js?v=57').catch((error) => console.error('Échec du service worker :', error)));
}
function setupInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (event) => { event.preventDefault(); deferredPrompt = event; installButton.classList.remove('hidden'); });
  installButton.addEventListener('click', async () => {
    if (!deferredPrompt) { showToast('Sur iPhone : Safari → Partager → Sur l’écran d’accueil.'); return; }
    deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; installButton.classList.add('hidden');
  });
}

document.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
document.querySelectorAll('.add-entry').forEach((button) => button.addEventListener('click', () => document.getElementById(button.dataset.form).classList.toggle('hidden')));
document.querySelectorAll('[data-open-form]').forEach((button) => button.addEventListener('click', () => {
  setView(button.dataset.view);
  const form = document.getElementById(button.dataset.openForm);
  form.classList.remove('hidden');
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}));
document.querySelectorAll('[data-go-view]').forEach((button) => button.addEventListener('click', (event) => { event.preventDefault(); setView(button.dataset.goView); }));
document.getElementById('carForm').addEventListener('submit', handleCarSubmit);
document.getElementById('carCatalogBrand').addEventListener('change', updateCarCatalogOptions);
document.getElementById('carCatalogEra').addEventListener('change', updateCarCatalogOptions);
document.getElementById('carCatalogSearch').addEventListener('input', updateCarCatalogOptions);
document.getElementById('addCatalogCar').addEventListener('click', handleCarCatalogAdd);
updateCarCatalogOptions();
document.getElementById('trackForm').addEventListener('submit', handleTrackSubmit);
document.getElementById('setupForm').addEventListener('submit', handleSetupSubmit);
document.getElementById('setupPhotosInput').addEventListener('change', handlePhotoSelection);
document.getElementById('exportButton').addEventListener('click', exportJson);
document.getElementById('importInput').addEventListener('change', (event) => { importJson(event.target.files?.[0]); event.target.value = ''; });
document.querySelectorAll('form').forEach((form) => form.addEventListener('reset', () => setTimeout(() => {
  form.classList.add('hidden');
  if (form.id === 'setupForm') { pendingPhotos = []; renderPhotoPreviews(); }
}, 0)));
document.getElementById('setupDialog').addEventListener('click', (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });

renderAll();
setView('dashboard');
registerServiceWorker();
setupInstallPrompt();
