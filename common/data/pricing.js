const pricingPlans = [
    {
        id: "pricing-1",
        title: "Standard",
        subtitle: "For teams just getting started with data and analytics",
        price: 199,
        button_text: "Test 14 days for free",
        link_button: "",
        access: [
            {
                title: "Unlimited users",
                value: true,
            },
            {
                title: "Daily refresh of data",
                value: true,
            },
            {
                title: "Limited historical data",
                value: '3 months',
            },
            {
                title: "Account limited by source",
                value: "1",
            },
        ],
        features: [
            {
                title: "Unlimited workspaces & reports ",
                value: true,
            },
            {
                title: "Unlimited custom dimensions",
                value: true,
            },
            {
                title: "Enrichment & Data preparation",
                value: false,
            },
        ],
        supports: [
            {
                title: "Dedicated slack channel",
                value: true,
            },
            {
                title: "Dedicated support",
                value: false,
            },
            {
                title: "Office trainings",
                value: false,
            },
            {
                title: "1 monthly meeting",
                value: false,
            },
        ]
    },
    {
        id: "pricing-2",
        title: "Growth",
        subtitle: "For teams wanting more advanced data insights and reporting",
        price: 699,
        button_text: "Test 14 days for free",
        link_button: "",
        access: [
            {
                title: "Unlimited users",
                value: true,
            },
            {
                title: "Daily refresh of data",
                value: true,
            },
            {
                title: "Unlimited historical data",
                value: true,
            },
            {
                title: "Unlimited account source",
                value: true,
            },
        ],
        features: [
            {
                title: "Unlimited workspaces & reports ",
                value: true,
            },
            {
                title: "Unlimited custom dimensions",
                value: true,
            },
            {
                title: "Enrichment & Data preparation",
                value: false,
            },
        ],
        supports: [
            {
                title: "Dedicated slack channel",
                value: true,
            },
            {
                title: "Dedicated support",
                value: true,
            },
            {
                title: "Office trainings",
                value: false,
            },
            {
                title: "1 monthly meeting",
                value: false,
            },
        ]
    },
    {
        id: "pricing-3",
        title: "Enterprise",
        subtitle: "For teams looking for advanced custom reports and integrations",
        price: -1,
        button_text: "Contact us",
        link_button: "",
        access: [
            {
                title: "Unlimited users",
                value: true,
            },
            {
                title: "Daily refresh of data",
                value: true,
            },
            {
                title: "Unlimited historical data",
                value: true,
            },
            {
                title: "Unlimited account source",
                value: true,
            },
        ],
        features: [
            {
                title: "Unlimited workspaces & reports ",
                value: true,
            },
            {
                title: "Unlimited custom dimensions",
                value: true,
            },
            {
                title: "Enrichment & Data preparation",
                value: true,
            },
        ],
        supports: [
            {
                title: "Dedicated slack channel",
                value: true,
            },
            {
                title: "Dedicated support",
                value: true,
            },
            {
                title: "Office trainings",
                value: true,
            },
            {
                title: "1 monthly meeting",
                value: true,
            },
        ]
    },
]

export default { pricingPlans }