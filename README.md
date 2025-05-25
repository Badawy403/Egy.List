# EgyList

A comprehensive Node.js package providing access to official Egyptian data including universities, governorates, cities, and more. This package makes it easy for developers to integrate Egypt-specific information into their applications.

## Installation

```bash
npm install egylist
```

## Features

- 🏛️ Complete list of Egyptian universities (40+ universities)
- 🏢 University faculties information
- 🗺️ All Egyptian governorates (27 governorates)
- 🏙️ Cities data for each governorate (100+ cities)
- 🔍 Search functionality for cities
- 🌐 Bilingual support (Arabic & English)
- 📍 Postal codes for governorates
- 🏫 Public and private university classification

## Usage

### Import the functions

```javascript
import {
  getAllUniversities,
  getFacultiesByUniversity,
  getAllGovernorates,
  getCitiesByGovernorateId,
  getAllCities,
  searchCitiesByName
} from 'egylist';
```

### Universities

#### Get all universities
```javascript
const universities = getAllUniversities();
console.log(universities);
// Output: ["Cairo University", "Ain Shams University", "Alexandria University", ...]
```

#### Get faculties for a specific university
```javascript
const faculties = getFacultiesByUniversity('جامعة القاهرة');
console.log(faculties);
// Output: ["كلية الحاسبات والمعلومات", "كلية الهندسة", "كلية الطب", ...]
```

### Governorates & Cities

#### Get all governorates
```javascript
const governorates = getAllGovernorates();
console.log(governorates);
// Output: [
//   { id: 1, name_en: "Cairo", name_ar: "القاهرة" },
//   { id: 2, name_en: "Alexandria", name_ar: "الإسكندرية" },
//   ...
// ]
```

#### Get cities by governorate ID
```javascript
const cities = getCitiesByGovernorateId(1); // Cairo governorate
console.log(cities);
// Output: [
//   { id: 1, name_en: "Cairo", name_ar: "القاهرة" },
//   { id: 2, name_en: "Helwan", name_ar: "حلوان" },
//   ...
// ]
```

#### Get all cities (flat list)
```javascript
const allCities = getAllCities();
console.log(allCities);
// Output: Array of all cities from all governorates
```

#### Search cities by name
```javascript
const searchResults = searchCitiesByName('cairo');
console.log(searchResults);
// Output: Cities matching "cairo" in English or Arabic names

const arabicSearch = searchCitiesByName('القاهرة');
console.log(arabicSearch);
// Output: Cities matching "القاهرة" in Arabic or English names
```

## API Reference

### Universities

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `getAllUniversities()` | None | `string[]` | Returns English names of all universities |
| `getFacultiesByUniversity(universityName)` | `universityName: string` | `string[]` | Returns faculties for the specified university (Arabic name) |

### Governorates & Cities

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `getAllGovernorates()` | None | `Governorate[]` | Returns all governorates with ID and bilingual names |
| `getCitiesByGovernorateId(governorateId)` | `governorateId: number` | `City[]` | Returns cities in the specified governorate |
| `getAllCities()` | None | `City[]` | Returns all cities from all governorates |
| `searchCitiesByName(name)` | `name: string` | `City[]` | Search cities by name (supports Arabic and English) |

## Data Structures

### Governorate Object
```javascript
{
  id: number,
  name_en: string,
  name_ar: string
}
```

### City Object
```javascript
{
  id: number,
  name_en: string,
  name_ar: string
}
```

### University Data (Internal)
```javascript
{
  name: string,          // Arabic name
  engName: string,       // English name
  type: string,          // "حكومية" (Public) or "خاصة" (Private)
  faculties: string[]    // Array of faculty names in Arabic
}
```

## Data Coverage

### Universities
- **40+ Universities** including major public and private institutions
- **Government Universities**: Cairo University, Alexandria University, Ain Shams University, etc.
- **Private Universities**: American University in Cairo, German University in Cairo, October 6 University, etc.
- **Faculties**: Complete list of faculties for each university

### Geographic Data
- **27 Governorates** covering all of Egypt
- **100+ Cities** with bilingual names
- **Postal Codes** for each governorate
- **Complete Coverage** from Cairo to Aswan, including Sinai and Red Sea regions

## Examples

### Complete Example
```javascript
import {
  getAllUniversities,
  getFacultiesByUniversity,
  getAllGovernorates,
  getCitiesByGovernorateId,
  searchCitiesByName
} from 'egylist';

// Get all universities
const universities = getAllUniversities();
console.log(`Total universities: ${universities.length}`);

// Get faculties for Cairo University
const cairoUniFaculties = getFacultiesByUniversity('جامعة القاهرة');
console.log(`Cairo University has ${cairoUniFaculties.length} faculties`);

// Get all governorates
const governorates = getAllGovernorates();
console.log(`Egypt has ${governorates.length} governorates`);

// Get cities in Cairo governorate
const cairoCities = getCitiesByGovernorateId(1);
console.log(`Cairo governorate has ${cairoCities.length} cities`);

// Search for cities containing "new"
const newCities = searchCitiesByName('new');
console.log(`Found ${newCities.length} cities with "new" in the name`);
```



## Links

- [GitHub Repository](https://github.com/Badawy403/Egy.List)
- [NPM Package](https://www.npmjs.com/package/egylist)
- [Issues](https://github.com/Badawy403/Egy.List/issues)


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Areas for contribution:
- Adding more universities
- Updating university data
- Adding more cities
- Improving search functionality
- Adding tests

