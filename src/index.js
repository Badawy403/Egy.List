import universities from "./../data/universities.js";
import egyptData from "./../data/governorate.js";


function getAllUniversities() {
  return universities.map((u) => u.engName);
}

function getFacultiesByUniversity(universityName) {
  const uni = universities.find((u) => u.name === universityName);
  return uni ? uni.faculties : [];
}

 const getAllGovernorates = () => {
  return egyptData.map(governorate => ({
    id: governorate.id,
    name_en: governorate.name_en,
    name_ar: governorate.name_ar,
  }));
};

// Get cities in a specific governorate by its ID
 const getCitiesByGovernorateId = (governorateId) => {
  const governorate = egyptData.find(gov => gov.id === governorateId);
  if (!governorate) return [];
  return governorate.cities.map(city => ({
    id: city.id,
    name_en: city.name_en,
    name_ar: city.name_ar,
    coordinates: city.coordinates,
    population: city.population,
  }));
};


// Get all cities (flat list)
 const getAllCities = () => {
  return egyptData.reduce((acc, governorate) => {
    return [...acc, ...governorate.cities];
  }, []);
};

// Search cities by name
 const searchCitiesByName = (name) => {
  return egyptData.reduce((acc, governorate) => {
    const matchingCities = governorate.cities.filter(city =>
      city.name_en.toLowerCase().includes(name.toLowerCase()) ||
      city.name_ar.toLowerCase().includes(name.toLowerCase())
    );
    return [...acc, ...matchingCities];
  }, []);
};



export {
  getAllUniversities,
  getFacultiesByUniversity,
  getAllGovernorates,
  getCitiesByGovernorateId,
  getAllCities,
  searchCitiesByName,
};
