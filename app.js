/* navbar */

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

let hamBurger = document.querySelector(".hamburger");

/*array of buses data*/

const buses = [
    {
        busNumber: "ER-01",
        from: "chamkani",
        to: "karkhano-market",
        fare: 50,
        arrivalTime: "08:15 AM",
        capacity: 70,
        currentPassengers: 42,
        route: [
            "Chamkani",
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Karkhano Market"
        ]
    },

    {
        busNumber: "ER-02",
        from: "karkhano-market",
        to: "chamkani",
        fare: 50,
        arrivalTime: "08:30 AM",
        capacity: 70,
        currentPassengers: 31,
        route: [
            "Karkhano Market",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk",
            "Chamkani"
        ]
    },

    {
        busNumber: "SR-01",
        from: "phase-6-terminal",
        to: "saddar-bazar",
        fare: 40,
        arrivalTime: "08:45 AM",
        capacity: 65,
        currentPassengers: 38,
        route: [
            "Phase 6 Terminal",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar"
        ]
    },

    {
        busNumber: "SR-02",
        from: "saddar-bazar",
        to: "phase-6-terminal",
        fare: 40,
        arrivalTime: "09:00 AM",
        capacity: 65,
        currentPassengers: 27,
        route: [
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Phase 6 Terminal"
        ]
    },

    {
        busNumber: "DR-01",
        from: "phase-7-terminal",
        to: "gulbahar-chowk",
        fare: 45,
        arrivalTime: "09:15 AM",
        capacity: 60,
        currentPassengers: 35,
        route: [
            "Phase 7 Terminal",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk"
        ]
    },

    {
        busNumber: "DR-02",
        from: "gulbahar-chowk",
        to: "phase-7-terminal",
        fare: 45,
        arrivalTime: "09:30 AM",
        capacity: 60,
        currentPassengers: 29,
        route: [
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Phase 7 Terminal"
        ]
    },

    {
        busNumber: "ER-03",
        from: "chamkani",
        to: "phase-6-terminal",
        fare: 55,
        arrivalTime: "09:45 AM",
        capacity: 70,
        currentPassengers: 46,
        route: [
            "Chamkani",
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Phase 6 Terminal"
        ]
    },

    {
        busNumber: "ER-04",
        from: "phase-6-terminal",
        to: "chamkani",
        fare: 55,
        arrivalTime: "10:00 AM",
        capacity: 70,
        currentPassengers: 33,
        route: [
            "Phase 6 Terminal",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk",
            "Chamkani"
        ]
    },

    {
        busNumber: "SR-03",
        from: "university-town",
        to: "karkhano-market",
        fare: 35,
        arrivalTime: "10:15 AM",
        capacity: 60,
        currentPassengers: 24,
        route: [
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Karkhano Market"
        ]
    },

    {
        busNumber: "SR-04",
        from: "karkhano-market",
        to: "university-town",
        fare: 35,
        arrivalTime: "10:30 AM",
        capacity: 60,
        currentPassengers: 19,
        route: [
            "Karkhano Market",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town"
        ]
    },

    {
        busNumber: "DR-03",
        from: "islamia-college",
        to: "mall-of-hayatabad",
        fare: 40,
        arrivalTime: "10:45 AM",
        capacity: 65,
        currentPassengers: 41,
        route: [
            "Islamia College",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad"
        ]
    },

    {
        busNumber: "DR-04",
        from: "mall-of-hayatabad",
        to: "islamia-college",
        fare: 40,
        arrivalTime: "11:00 AM",
        capacity: 65,
        currentPassengers: 28,
        route: [
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Islamia College"
        ]
    },

    {
        busNumber: "ER-05",
        from: "chamkani",
        to: "university-of-peshawar",
        fare: 45,
        arrivalTime: "11:15 AM",
        capacity: 70,
        currentPassengers: 39,
        route: [
            "Chamkani",
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar"
        ]
    },

    {
        busNumber: "ER-06",
        from: "university-of-peshawar",
        to: "chamkani",
        fare: 45,
        arrivalTime: "11:30 AM",
        capacity: 70,
        currentPassengers: 25,
        route: [
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk",
            "Chamkani"
        ]
    },

    {
        busNumber: "SR-05",
        from: "saddar-bazar",
        to: "karkhano-market",
        fare: 45,
        arrivalTime: "11:45 AM",
        capacity: 65,
        currentPassengers: 32,
        route: [
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Karkhano Market"
        ]
    },

    {
        busNumber: "SR-06",
        from: "karkhano-market",
        to: "saddar-bazar",
        fare: 45,
        arrivalTime: "12:00 PM",
        capacity: 65,
        currentPassengers: 21,
        route: [
            "Karkhano Market",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar"
        ]
    },

    {
        busNumber: "DR-05",
        from: "gulbahar-chowk",
        to: "islamia-college",
        fare: 35,
        arrivalTime: "12:15 PM",
        capacity: 60,
        currentPassengers: 34,
        route: [
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "Islamia College"
        ]
    },

    {
        busNumber: "DR-06",
        from: "islamia-college",
        to: "gulbahar-chowk",
        fare: 35,
        arrivalTime: "12:30 PM",
        capacity: 60,
        currentPassengers: 22,
        route: [
            "Islamia College",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk"
        ]
    },

    {
        busNumber: "ER-07",
        from: "chamkani",
        to: "phase-7-terminal",
        fare: 60,
        arrivalTime: "12:45 PM",
        capacity: 75,
        currentPassengers: 47,
        route: [
            "Chamkani",
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Phase 7 Terminal"
        ]
    },

    {
        busNumber: "ER-08",
        from: "phase-7-terminal",
        to: "chamkani",
        fare: 60,
        arrivalTime: "01:00 PM",
        capacity: 75,
        currentPassengers: 36,
        route: [
            "Phase 7 Terminal",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk",
            "Chamkani"
        ]
    },

    {
        busNumber: "SR-07",
        from: "university-town",
        to: "phase-6-terminal",
        fare: 40,
        arrivalTime: "01:15 PM",
        capacity: 65,
        currentPassengers: 30,
        route: [
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Phase 6 Terminal"
        ]
    },

    {
        busNumber: "SR-08",
        from: "phase-6-terminal",
        to: "university-town",
        fare: 40,
        arrivalTime: "01:30 PM",
        capacity: 65,
        currentPassengers: 18,
        route: [
            "Phase 6 Terminal",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town"
        ]
    },

    {
        busNumber: "DR-07",
        from: "saddar-bazar",
        to: "phase-7-terminal",
        fare: 50,
        arrivalTime: "01:45 PM",
        capacity: 70,
        currentPassengers: 44,
        route: [
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Phase 7 Terminal"
        ]
    },

    {
        busNumber: "DR-08",
        from: "phase-7-terminal",
        to: "saddar-bazar",
        fare: 50,
        arrivalTime: "02:00 PM",
        capacity: 70,
        currentPassengers: 26,
        route: [
            "Phase 7 Terminal",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar"
        ]
    },

    {
        busNumber: "ER-09",
        from: "gulbahar-chowk",
        to: "karkhano-market",
        fare: 50,
        arrivalTime: "02:15 PM",
        capacity: 70,
        currentPassengers: 37,
        route: [
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Karkhano Market"
        ]
    },

    {
        busNumber: "ER-10",
        from: "karkhano-market",
        to: "gulbahar-chowk",
        fare: 50,
        arrivalTime: "02:30 PM",
        capacity: 70,
        currentPassengers: 23,
        route: [
            "Karkhano Market",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk"
        ]
    },

    {
        busNumber: "SR-09",
        from: "mall-road",
        to: "phase-6-terminal",
        fare: 40,
        arrivalTime: "02:45 PM",
        capacity: 60,
        currentPassengers: 31,
        route: [
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Phase 6 Terminal"
        ]
    },

    {
        busNumber: "SR-10",
        from: "phase-6-terminal",
        to: "mall-road",
        fare: 40,
        arrivalTime: "03:00 PM",
        capacity: 60,
        currentPassengers: 20,
        route: [
            "Phase 6 Terminal",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road"
        ]
    },

    {
        busNumber: "DR-09",
        from: "islamia-college",
        to: "karkhano-market",
        fare: 45,
        arrivalTime: "03:15 PM",
        capacity: 65,
        currentPassengers: 36,
        route: [
            "Islamia College",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Karkhano Market"
        ]
    },

    {
        busNumber: "DR-10",
        from: "karkhano-market",
        to: "islamia-college",
        fare: 45,
        arrivalTime: "03:30 PM",
        capacity: 65,
        currentPassengers: 24,
        route: [
            "Karkhano Market",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Islamia College"
        ]
    },

    {
        busNumber: "ER-11",
        from: "chamkani",
        to: "mall-road",
        fare: 40,
        arrivalTime: "03:45 PM",
        capacity: 70,
        currentPassengers: 48,
        route: [
            "Chamkani",
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road"
        ]
    },

    {
        busNumber: "ER-12",
        from: "mall-road",
        to: "chamkani",
        fare: 40,
        arrivalTime: "04:00 PM",
        capacity: 70,
        currentPassengers: 29,
        route: [
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk",
            "Chamkani"
        ]
    },

    {
        busNumber: "SR-11",
        from: "university-of-peshawar",
        to: "phase-7-terminal",
        fare: 45,
        arrivalTime: "04:15 PM",
        capacity: 65,
        currentPassengers: 40,
        route: [
            "University of Peshawar",
            "Mall of Hayatabad",
            "Phase 6 Terminal",
            "Phase 7 Terminal"
        ]
    },

    {
        busNumber: "SR-12",
        from: "phase-7-terminal",
        to: "university-of-peshawar",
        fare: 45,
        arrivalTime: "04:30 PM",
        capacity: 65,
        currentPassengers: 27,
        route: [
            "Phase 7 Terminal",
            "Phase 6 Terminal",
            "Mall of Hayatabad",
            "University of Peshawar"
        ]
    },

    {
        busNumber: "DR-11",
        from: "gulbahar-chowk",
        to: "phase-6-terminal",
        fare: 50,
        arrivalTime: "04:45 PM",
        capacity: 70,
        currentPassengers: 51,
        route: [
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Phase 6 Terminal"
        ]
    },

    {
        busNumber: "DR-12",
        from: "phase-6-terminal",
        to: "gulbahar-chowk",
        fare: 50,
        arrivalTime: "05:00 PM",
        capacity: 70,
        currentPassengers: 34,
        route: [
            "Phase 6 Terminal",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk"
        ]
    },

    {
        busNumber: "ER-13",
        from: "chamkani",
        to: "islamia-college",
        fare: 45,
        arrivalTime: "05:15 PM",
        capacity: 70,
        currentPassengers: 15,
        route: [
            "Chamkani",
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "Islamia College"
        ]
    },

    {
        busNumber: "ER-14",
        from: "islamia-college",
        to: "chamkani",
        fare: 45,
        arrivalTime: "05:30 PM",
        capacity: 70,
        currentPassengers: 30,
        route: [
            "Islamia College",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk",
            "Chamkani"
        ]
    },

    {
        busNumber: "SR-13",
        from: "saddar-bazar",
        to: "university-of-peshawar",
        fare: 35,
        arrivalTime: "05:45 PM",
        capacity: 60,
        currentPassengers: 33,
        route: [
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar"
        ]
    },

    {
        busNumber: "SR-14",
        from: "university-of-peshawar",
        to: "saddar-bazar",
        fare: 35,
        arrivalTime: "06:00 PM",
        capacity: 60,
        currentPassengers: 21,
        route: [
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar"
        ]
    },

    {
        busNumber: "DR-13",
        from: "mall-of-hayatabad",
        to: "chamkani",
        fare: 55,
        arrivalTime: "06:15 PM",
        capacity: 75,
        currentPassengers: 49,
        route: [
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk",
            "Chamkani"
        ]
    },

    {
        busNumber: "DR-14",
        from: "chamkani",
        to: "mall-of-hayatabad",
        fare: 55,
        arrivalTime: "06:30 PM",
        capacity: 75,
        currentPassengers: 38,
        route: [
            "Chamkani",
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad"
        ]
    },

    {
        busNumber: "ER-15",
        from: "phase-7-terminal",
        to: "karkhano-market",
        fare: 35,
        arrivalTime: "06:45 PM",
        capacity: 60,
        currentPassengers: 26,
        route: [
            "Phase 7 Terminal",
            "Phase 6 Terminal",
            "Mall of Hayatabad",
            "Karkhano Market"
        ]
    },

    {
        busNumber: "ER-16",
        from: "karkhano-market",
        to: "phase-7-terminal",
        fare: 35,
        arrivalTime: "07:00 PM",
        capacity: 60,
        currentPassengers: 18,
        route: [
            "Karkhano Market",
            "Mall of Hayatabad",
            "Phase 6 Terminal",
            "Phase 7 Terminal"
        ]
    },

    {
        busNumber: "SR-15",
        from: "mall-road",
        to: "gulbahar-chowk",
        fare: 35,
        arrivalTime: "07:15 PM",
        capacity: 65,
        currentPassengers: 42,
        route: [
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk"
        ]
    },

    {
        busNumber: "SR-16",
        from: "University-of-Peshawar",
        to: "mall-road",
        fare: 35,
        arrivalTime: "07:30 PM",
        capacity: 65,
        currentPassengers: 25,
        route: [
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road"
        ]
    },

    {
        busNumber: "DR-15",
        from: "university-town",
        to: "chamkani",
        fare: 45,
        arrivalTime: "07:45 PM",
        capacity: 70,
        currentPassengers: 44,
        route: [
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk",
            "Chamkani"
        ]
    },

    {
        busNumber: "DR-16",
        from: "chamkani",
        to: "university-town",
        fare: 45,
        arrivalTime: "08:00 PM",
        capacity: 70,
        currentPassengers: 32,
        route: [
            "Chamkani",
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town"
        ]
    },

    {
        busNumber: "ER-17",
        from: "islamia-college",
        to: "phase-7-terminal",
        fare: 50,
        arrivalTime: "08:15 PM",
        capacity: 70,
        currentPassengers: 41,
        route: [
            "Islamia College",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Phase 6 Terminal",
            "Phase 7 Terminal"
        ]
    },

    {
        busNumber: "ER-18",
        from: "phase-7-terminal",
        to: "islamia-college",
        fare: 50,
        arrivalTime: "08:30 PM",
        capacity: 70,
        currentPassengers: 28,
        route: [
            "Phase 7 Terminal",
            "Phase 6 Terminal",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Islamia College"
        ]
    },

    {
        busNumber: "SR-17",
        from: "university-of-peshawar",
        to: "karkhano-market",
        fare: 40,
        arrivalTime: "08:45 PM",
        capacity: 65,
        currentPassengers: 35,
        route: [
            "University of Peshawar",
            "Mall of Hayatabad",
            "Karkhano Market"
        ]
    },

    {
        busNumber: "SR-18",
        from: "karkhano-market",
        to: "university-of-peshawar",
        fare: 40,
        arrivalTime: "09:00 PM",
        capacity: 65,
        currentPassengers: 22,
        route: [
            "Karkhano Market",
            "Mall of Hayatabad",
            "University of Peshawar"
        ]
    },

    {
        busNumber: "DR-17",
        from: "saddar-bazar",
        to: "islamia-college",
        fare: 35,
        arrivalTime: "09:15 PM",
        capacity: 60,
        currentPassengers: 29,
        route: [
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "Islamia College"
        ]
    },

    {
        busNumber: "DR-18",
        from: "islamia-college",
        to: "saddar-bazar",
        fare: 35,
        arrivalTime: "09:30 PM",
        capacity: 60,
        currentPassengers: 17,
        route: [
            "Islamia College",
            "University Town",
            "Mall Road",
            "Saddar Bazar"
        ]
    },

    {
        busNumber: "ER-19",
        from: "phase-6-terminal",
        to: "chamkani",
        fare: 55,
        arrivalTime: "09:45 PM",
        capacity: 75,
        currentPassengers: 46,
        route: [
            "Phase 6 Terminal",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar",
            "Gulbahar Chowk",
            "Chamkani"
        ]
    },

    {
        busNumber: "ER-20",
        from: "chamkani",
        to: "phase-6-terminal",
        fare: 55,
        arrivalTime: "10:00 PM",
        capacity: 75,
        currentPassengers: 14,
        route: [
            "Chamkani",
            "Gulbahar Chowk",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "University of Peshawar",
            "Mall of Hayatabad",
            "Phase 6 Terminal"
        ]
    },

    {
        busNumber: "DR-19",
        from: "chamkani",
       to: "gulbahar-chowk",
        fare: 55,
        arrivalTime: "06:30 PM",
        capacity: 63,
        currentPassengers: 51,
        route: [
            "Chamkani",
            "Khyber Bazar",
            "Saddar Bazar",
            "Mall Road",
            "University Town",
            "Gulbahar Chowk"
        ]
    },

    {
        busNumber: "ER-21",
        from: "gulbahar-chowk",
        to: "khyber-bazar",
        fare: 55,
        arrivalTime: "06:30 PM",
        capacity: 63,
        currentPassengers: 51,
        route: [
            "Gulbahar Chowk",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Saddar Bazar",
            "Khyber Bazar"
        ]
    },

    {
        busNumber: "ER-22",
        from: "saddar-bazar",
        to: "khyber-bazar",
        fare: 55,
        arrivalTime: "06:55 PM",
        capacity: 65,
        currentPassengers: 45,
        route: [
            "Saddar Bazar",
            "Mall of Hayatabad",
            "University of Peshawar",
            "University Town",
            "Mall Road",
            "Gulbahar Chowk",
            "Khyber Bazar"
        ]
    },

    {
        busNumber: "DR-20",
        from: "khyber-bazar",
       to: "saddar-bazar",
        fare: 35,
        arrivalTime: "08:30 PM",
        capacity: 70,
        currentPassengers: 42,
        route: [
            "Khyber Bazar",
            "Chamkani",
            "Mall Road",
            "University Town",
            "Gulbahar Chowk",
            "Saddar Bazar"
        ]
    },
];


//================================
//         INDEX.HTML
//================================

/* from and to ** select button */

let from = document.querySelector("#from");
let to = document.querySelector("#to");
let searchBtn = document.querySelector("#search-bus");
let fromError = document.querySelector("#fromError");
let toError = document.querySelector("#toError");

if (searchBtn) {
searchBtn.addEventListener("click", () => {

    const fromValue = from.value;
    const toValue = to.value;

//validation

if (fromValue === "" || toValue === "") {
    fromError.textContent = "You have to select area";
    toError.textContent = "you have to select area";
    return;
} else if (fromValue === toValue) {
    fromError.textContent = "You cannot choose same areas";
    toError.textContent = "you cannot choose same areas";
    return;
} 

//save selected values
    localStorage.setItem("from", fromValue)
    localStorage.setItem("to", toValue)

//go to buses page
    window.location.href = "buses.html";
});
}

// ======================================
//              BUSES PAGE
// ======================================

let busContainer = document.querySelector("#busCards");
let fromSummary = document.querySelector(".fromLocation");
let toSummary = document.querySelector(".toLocation");
let foundBuses = document.querySelector(".found-buses-num");

if (busContainer) {

//get selected values
let selectedFrom = localStorage.getItem("from");
let selectedTo = localStorage.getItem("to");

fromSummary.textContent=selectedFrom;
toSummary.textContent=selectedTo;


//search summary
let filterBuses = buses.filter((bus) => {
    return bus.from === selectedFrom && bus.to === selectedTo;
});

foundBuses.textContent = filterBuses.length;

if (filterBuses.length === 0) {
    busContainer.innerHTML += `
    <P class="no-bus-msg">Sorry! Right now no bus is traveling in this area. </p>
    `;
} else { filterBuses.forEach((bus) => {
    busContainer.innerHTML += `
            
    <div class="bus-card">
                <div class="bus-card-top">
                    <div class="bus-info">
                        <i class="bi bi-bus-front-fill bus-card-icon"></i>
                    </div>
                    <h3>${bus.busNumber}</h3>
                </div>

                <div class="bus-card-middle">
                    <div class="from-to">
                        <i class="fa-solid fa-location-dot loc-icon3"></i>
                        <span><strong>${bus.from}</strong> <i class="fa-solid fa-arrow-right"></i><strong>${bus.to}</strong></span>
                    </div>

                    <div class="stops">
                       <b>Stops</b>: ${bus.route.join(">")}
                    </div>

                    <div class="card-bus-time">
                        <i class="fa-solid fa-clock clock-card"></i>
                        <span class="span1">${bus.arrivalTime}</span>
                    </div>
                </div>

                <div class="bus-card-end">
                    <button class="view-details-btn" data-bus="${bus.busNumber}">View Details<i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
    `
});
}
}
//back to search btn

let backBtn = document.querySelector(".back-btn");

if (backBtn) {
    backBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}


// ===========================
//        VIEW DETAILS
// ===========================

let viewDetailBtns = document.querySelectorAll(".view-details-btn");

viewDetailBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let busNum = btn.dataset.bus;

        localStorage.setItem("selectedBus", busNum);

        window.location.href = "details.html";
    });
});

let selectedBusNum = localStorage.getItem("selectedBus");

let selectedBus = buses.find((bus) => {
    return bus.busNumber === selectedBusNum;
});

let busName = document.querySelector("#bus-name");

busName.textContent = selectedBus.busNumber;


let busNum = document.querySelector("#busNum");
let arrivalTime = document.querySelector("#arrivalTime");
let fare = document.querySelector("#fare");
let totalStop = document.querySelector("#totalStop");
let currentPassengers = document.querySelector("#currentPassengers");
let capacity = document.querySelector("#capacity");

busNum.textContent = selectedBus.busNumber;
arrivalTime.textContent = selectedBus.arrivalTime;
fare.textContent = "Rs:" + selectedBus.fare;
totalStop.textContent = selectedBus.route.length + " stops";
currentPassengers.textContent = selectedBus.currentPassengers + " / " + selectedBus.capacity;
capacity.textContent = selectedBus.capacity + " Passengers";


//route detail

let routeStops = document.querySelectorAll(".route-stop");

routeStops.forEach((stop, index) => {
    if (selectedBus.route[index]) {
        stop.textContent = `${selectedBus.route[index]}`
    } else {
        stop.style.display = "none"
    }
});

//update progress bar

let progressFill = document.querySelector("#progressFill");

if (progressFill) {

let passengerRate = (selectedBus.currentPassengers / selectedBus.capacity) * 100;
let passengerPercentageText = document.querySelector("#PassengerPercentage");

progressFill.style.width = passengerRate + "%"

let passengerPercentage = Math.round(passengerRate);

passengerPercentageText.textContent = passengerPercentage + "%";

//crowd level tag update

let crowdLevel = document.querySelector("#crowdLevel");

if (crowdLevel) {
if(passengerPercentage < 40) {
    crowdLevel.textContent = "Low";
    crowdLevel.style.backgroundColor = "rgba(210, 245, 154, 0.9)";
} else if (passengerPercentage < 65) {
    crowdLevel.textContent = "Medium";
    crowdLevel.style.backgroundColor = "rgba(255, 213, 149, 0.92)";
} else {
    crowdLevel.textContent = "High";
    crowdLevel.style.backgroundColor = "rgba(255, 148, 148, 0.9)";
}
}
}



//back to result of buses 

let backBtn2 = document.querySelector(".back-btn2");

if (backBtn2) {
    backBtn2.addEventListener("click", () => {
        window.location.href = "buses.html";
    });
}