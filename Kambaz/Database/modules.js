export default [
    {
        _id: 'M101',
        name: 'Introduction to Rocket Propulsion',
        description: 'Basic principles of rocket propulsion and rocket engines.',
        course: 'RS101',
        lessons: [
            {
                _id: 'L101',
                name: 'History of Rocketry',
                description: 'A brief history of rocketry and space exploration.',
                module: 'M101',
            },
            {
                _id: 'L102',
                name: 'Rocket Propulsion Fundamentals',
                description: 'Basic principles of rocket propulsion.',
                module: 'M101',
            },
            {
                _id: 'L103',
                name: 'Rocket Engine Types',
                description: 'Overview of different types of rocket engines.',
                module: 'M101',
            },
        ],
    },
    {
        _id: 'M102',
        name: 'Fuel and Combustion',
        description: 'Understanding rocket fuel, combustion processes, and efficiency.',
        course: 'RS101',
        lessons: [
            {
                _id: 'L201',
                name: 'Rocket Fuel',
                description: 'Overview of different types of rocket fuels.',
                module: 'M102',
            },
            {
                _id: 'L202',
                name: 'Combustion Processes',
                description: 'Understanding combustion processes and efficiency.',
                module: 'M102',
            },
            {
                _id: 'L203',
                name: 'Combustion Instability',
                description: 'Understanding combustion instability and mitigation.',
                module: 'M102',
            },
        ],
    },
    {
        _id: 'M103',
        name: 'Nozzle Design',
        description: 'Principles of rocket nozzle design and performance optimization.',
        course: 'RS101',
        lessons: [
            {
                _id: 'L301',
                name: 'Nozzle Design',
                description: 'Overview of different types of rocket nozzles.',
                module: 'M103',
            },
            {
                _id: 'L302',
                name: 'Nozzle Performance',
                description: 'Understanding nozzle performance and efficiency.',
                module: 'M103',
            },
            {
                _id: 'L303',
                name: 'Nozzle Optimization',
                description: 'Optimizing nozzle design for specific applications.',
                module: 'M103',
            },
        ],
    },
    {
        _id: 'M201',
        name: 'Fundamentals of Aerodynamics',
        description: 'Basic aerodynamic concepts and fluid dynamics principles.',
        course: 'RS102',
        lessons: [
            {
                _id: 'L401',
                name: 'Basic Fluid Dynamics',
                description: 'Introduction to fluid dynamics principles and equations.',
                module: 'M201',
            },
            {
                _id: 'L402',
                name: 'Aerodynamic Forces',
                description: 'Understanding lift, drag, and pressure distributions.',
                module: 'M201',
            },
            {
                _id: 'L403',
                name: 'Boundary Layer Theory',
                description: 'Analysis of boundary layer behavior and effects.',
                module: 'M201',
            },
        ],
    },
    {
        _id: 'M202',
        name: 'Subsonic and Supersonic Flow',
        description: 'Understanding subsonic and supersonic aerodynamic behaviors.',
        course: 'RS102',
        lessons: [
            {
                _id: 'L501',
                name: 'Compressible Flow',
                description: 'Principles of compressible flow and shock waves.',
                module: 'M202',
            },
            {
                _id: 'L502',
                name: 'Supersonic Aerodynamics',
                description: 'Behavior of aircraft and rockets at supersonic speeds.',
                module: 'M202',
            },
            {
                _id: 'L503',
                name: 'Flow Visualization',
                description: 'Methods for visualizing and analyzing flow patterns.',
                module: 'M202',
            },
        ],
    },
    {
        _id: 'M203',
        name: 'Aerodynamic Heating',
        description: 'Study of aerodynamic heating and thermal protection systems.',
        course: 'RS102',
        lessons: [
            {
                _id: 'L601',
                name: 'Heat Transfer Fundamentals',
                description: 'Basic principles of heat transfer in high-speed flight.',
                module: 'M203',
            },
            {
                _id: 'L602',
                name: 'Thermal Protection Systems',
                description: 'Design and analysis of thermal protection systems.',
                module: 'M203',
            },
            {
                _id: 'L603',
                name: 'Material Selection',
                description: 'Selection of materials for thermal protection.',
                module: 'M203',
            },
        ],
    },
    {
        _id: 'M301',
        name: 'Spacecraft Structural Design',
        description: 'Fundamentals of designing spacecraft structures and materials selection.',
        course: 'RS103',
        lessons: [
            {
                _id: 'L701',
                name: 'Structural Loading',
                description: 'Analysis of loads during launch and space operations.',
                module: 'M301',
            },
            {
                _id: 'L702',
                name: 'Materials Science',
                description: 'Space-grade materials and their properties.',
                module: 'M301',
            },
            {
                _id: 'L703',
                name: 'Structural Testing',
                description: 'Methods for testing spacecraft structures.',
                module: 'M301',
            },
        ],
    },
    {
        _id: 'M302',
        name: 'Orbital Mechanics',
        description: 'Understanding orbital dynamics and mission planning.',
        course: 'RS103',
        lessons: [
            {
                _id: 'L801',
                name: 'Orbital Elements',
                description: 'Understanding orbital parameters and calculations.',
                module: 'M302',
            },
            {
                _id: 'L802',
                name: 'Orbital Maneuvers',
                description: 'Planning and executing orbital changes.',
                module: 'M302',
            },
            {
                _id: 'L803',
                name: 'Mission Design',
                description: 'Principles of space mission design and planning.',
                module: 'M302',
            },
        ],
    },
    {
        _id: 'M303',
        name: 'Spacecraft Systems Engineering',
        description: 'Overview of spacecraft systems and subsystems engineering.',
        course: 'RS103',
        lessons: [
            {
                _id: 'L901',
                name: 'Power Systems',
                description: 'Spacecraft power generation and management.',
                module: 'M303',
            },
            {
                _id: 'L902',
                name: 'Communication Systems',
                description: 'Space communication and data handling.',
                module: 'M303',
            },
            {
                _id: 'L903',
                name: 'Attitude Control',
                description: 'Spacecraft orientation and control systems.',
                module: 'M303',
            },
        ],
    },
];