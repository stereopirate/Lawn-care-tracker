// Lawn Care Tracker - Grass Programs Database
// Research-backed programs from university extension services

const grassPrograms = {
    // Tall Fescue Programs
    tallFescue_zone4: {
        grassType: "Tall Fescue",
        zone: 4,
        description: "Tall fescue maintenance program for Zone 4 - excellent cold tolerance with deep root system",
        schedule: [
            {
                month: "March",
                tasks: [
                    "Clean up winter debris when soil dries",
                    "Begin mowing when grass reaches 4 inches",
                    "Sharpen mower blade"
                ]
            },
            {
                month: "April",
                soilTemp: "50-55°F",
                tasks: [
                    "Apply pre-emergent for crabgrass (before soil hits 55°F)",
                    "First fertilization: 1 lb N per 1,000 sq ft",
                    "Mow weekly at 3-3.5 inches",
                    "Water 1-1.5 inches per week if dry"
                ]
            },
            {
                month: "May",
                tasks: [
                    "Second fertilization: 1 lb N per 1,000 sq ft",
                    "Continue mowing at 3-3.5 inches",
                    "Water as needed",
                    "Spot spray broadleaf weeds if needed"
                ]
            },
            {
                month: "June",
                tasks: [
                    "Raise mowing height to 3.5-4 inches for summer",
                    "Light fertilization: 0.5 lb N per 1,000 sq ft (optional)",
                    "Water deeply: 1-1.5 inches per week",
                    "Monitor for disease"
                ]
            },
            {
                month: "July",
                tasks: [
                    "NO fertilization this month",
                    "Maintain 3.5-4 inch mowing height",
                    "Water 1-1.5 inches per week",
                    "Accept some heat stress (normal)"
                ]
            },
            {
                month: "August",
                tasks: [
                    "NO fertilization",
                    "Continue regular mowing and watering",
                    "Prepare for fall renovation if needed"
                ]
            },
            {
                month: "September",
                importance: "MOST IMPORTANT MONTH",
                tasks: [
                    "Heavy fertilization: 1-1.5 lb N per 1,000 sq ft (early Sept)",
                    "Core aerate if needed",
                    "Overseed thin areas: 6-8 lbs per 1,000 sq ft",
                    "Soil test every 2-3 years",
                    "Lower mowing back to 3-3.5 inches"
                ]
            },
            {
                month: "October",
                tasks: [
                    "Second fall fertilization: 1 lb N per 1,000 sq ft",
                    "Apply lime if pH test showed below 6.0",
                    "Continue overseeding if needed",
                    "Mow weekly"
                ]
            },
            {
                month: "November",
                tasks: [
                    "Final fertilization: 1 lb N per 1,000 sq ft (early Nov)",
                    "Continue mowing until grass stops growing",
                    "Final mowing at 2.5-3 inches",
                    "Clean up leaves"
                ]
            },
            {
                month: "December-February",
                tasks: [
                    "No maintenance needed",
                    "Stay off frozen grass",
                    "Plan spring program"
                ]
            }
        ],
        sources: [
            { institution: "Penn State Extension", title: "Tall Fescue Lawn Maintenance Calendar", url: "https://extension.psu.edu/lawn-care" },
            { institution: "Purdue Extension", title: "Cool-Season Grass Care", url: "https://www.purdue.edu/hla/sites/turf/tall-fescue/" }
        ]
    },

    tallFescue_zone5: {
        grassType: "Tall Fescue",
        zone: 5,
        description: "Tall fescue maintenance program for Zone 5 - excellent performance with proper care",
        schedule: [
            {
                month: "March-April",
                tasks: [
                    "Clean up winter debris",
                    "Begin mowing when grass reaches 4 inches",
                    "Apply pre-emergent when soil hits 50-55°F",
                    "First fertilization: 1 lb N per 1,000 sq ft"
                ]
            },
            {
                month: "May",
                tasks: [
                    "Second fertilization: 1 lb N per 1,000 sq ft",
                    "Mow weekly at 3-3.5 inches",
                    "Water 1-1.5 inches per week if dry"
                ]
            },
            {
                month: "June-August",
                tasks: [
                    "Raise mowing to 3.5-4 inches",
                    "Light summer fertilization: 0.5 lb N (optional)",
                    "Water deeply 1-1.5 inches per week",
                    "Minimal fertilization during heat"
                ]
            },
            {
                month: "September",
                importance: "MOST IMPORTANT",
                tasks: [
                    "Heavy fertilization: 1-1.5 lb N per 1,000 sq ft",
                    "Core aerate",
                    "Overseed: 6-8 lbs per 1,000 sq ft",
                    "Soil test"
                ]
            },
            {
                month: "October-November",
                tasks: [
                    "Fall fertilization: 1 lb N per 1,000 sq ft each month",
                    "Apply lime if needed",
                    "Continue mowing until growth stops",
                    "Final mow at 2.5-3 inches"
                ]
            }
        ],
        sources: [
            { institution: "Penn State Extension", title: "Lawn Maintenance Calendar", url: "https://extension.psu.edu/lawn-care" },
            { institution: "Purdue Extension", title: "Cool-Season Lawn Care", url: "https://www.purdue.edu/hla/sites/turf/tall-fescue/" }
        ]
    },

    tallFescue_zone6: {
        grassType: "Tall Fescue",
        zone: 6,
        description: "Tall fescue maintenance program for Zone 6 - reliable performance with moderate heat tolerance",
        schedule: [
            {
                month: "March-April",
                tasks: [
                    "Apply pre-emergent when soil reaches 55°F",
                    "First fertilization: 1 lb N per 1,000 sq ft",
                    "Begin regular mowing at 3-3.5 inches"
                ]
            },
            {
                month: "May",
                tasks: [
                    "Second fertilization: 1 lb N per 1,000 sq ft",
                    "Mow weekly",
                    "Water as needed"
                ]
            },
            {
                month: "June-August",
                tasks: [
                    "Raise mowing to 3.5-4 inches for heat",
                    "Reduce fertilization (0.5 lb N max in summer)",
                    "Water 1-1.5 inches per week",
                    "Watch for brown patch disease"
                ]
            },
            {
                month: "September",
                importance: "PRIMARY FEEDING SEASON",
                tasks: [
                    "Heavy fertilization: 1-1.5 lb N per 1,000 sq ft",
                    "Core aerate",
                    "Overseed thin areas",
                    "Soil test"
                ]
            },
            {
                month: "October-November",
                tasks: [
                    "Fall fertilization: 1 lb N each month",
                    "Apply lime if pH below 6.0",
                    "Continue mowing until dormant"
                ]
            }
        ],
        sources: [
            { institution: "Penn State Extension", title: "Tall Fescue Maintenance", url: "https://extension.psu.edu/lawn-care" },
            { institution: "NC State Extension", title: "Carolina Lawns: Tall Fescue", url: "https://content.ces.ncsu.edu/carolina-lawns" }
        ]
    },

    tallFescue_zone7: {
        grassType: "Tall Fescue",
        zone: 7,
        description: "Tall fescue maintenance for Zone 7 transition zone - heat-tolerant varieties recommended",
        warning: "Zone 7 is transition zone for tall fescue. Use heat-tolerant varieties (Firecracker LS, Mustang 4, Bullseye) for best results.",
        schedule: [
            {
                month: "April",
                tasks: [
                    "Apply pre-emergent when soil hits 55-60°F",
                    "First fertilization: 1 lb N per 1,000 sq ft",
                    "Mow at 3-3.5 inches"
                ]
            },
            {
                month: "May",
                tasks: [
                    "Second fertilization: 1 lb N per 1,000 sq ft",
                    "Regular mowing and watering"
                ]
            },
            {
                month: "June-August",
                importance: "CRITICAL - Heat Stress Period",
                tasks: [
                    "RAISE mowing to 4 inches (critical for summer survival)",
                    "Minimize fertilization - 0.5 lb N max if needed",
                    "Water deeply 1.5 inches per week",
                    "Watch for brown patch disease",
                    "Accept some browning - it will recover in fall"
                ]
            },
            {
                month: "September",
                importance: "MOST IMPORTANT MONTH",
                tasks: [
                    "Heavy fertilization: 1.5 lb N per 1,000 sq ft",
                    "Core aerate",
                    "Overseed heavily: 8-10 lbs per 1,000 sq ft (transition zone needs more)",
                    "Soil test"
                ]
            },
            {
                month: "October-November",
                tasks: [
                    "Fall fertilization: 1 lb N per 1,000 sq ft each month",
                    "Apply lime if pH below 6.0",
                    "Continue mowing until dormant"
                ]
            }
        ],
        sources: [
            { institution: "NC State Extension", title: "Tall Fescue in the Transition Zone", url: "https://content.ces.ncsu.edu/carolina-lawns" },
            { institution: "Virginia Tech Extension", title: "Tall Fescue Management", url: "https://ext.vt.edu/lawn-garden.html" }
        ]
    }
};
