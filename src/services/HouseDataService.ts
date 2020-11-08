import http from "../http-common";
import { SearchData } from '../../typings/globals';
import { Favorite } from '../../typings/interface/favorite';

class HouseDataService {
  getAll() {
    return http.get("/houses");
  }

  get(id: string) {
    return http.get(`/houses/${id}`);
  }

  create(data: any) {
    return http.post("/houses", data);
  }

  update(id: string, data: any) {
    return http.put(`/houses/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/houses/${id}`);
  }

  deleteAll() {
    return http.delete(`/houses`);
  }

  findByTitle(title: string) {
    return http.get(`/houses?city=${title}`);
  }

  findByData(searchData: SearchData) {
    let searchQuery = ""
    for (const key in searchData) {
      // searchData[key] = searchData[key] ? searchData[key] : null;
      if (searchData[key]) {
        searchQuery += `${key}=${searchData[key]}&`
      }
    }
    return http.get(`/houses?${searchQuery}`);
    // return http.get(`/houses?city=${searchData.city}&zip=${searchData.zip}&tuin=${searchData.tuin}&startDate=${searchData.startDate}&endDate=${searchData.endDate}&minPrice=${searchData.minPrice}&maxPrice=${searchData.maxPrice}&minRooms=${searchData.minRooms}&maxRooms=${searchData.maxRooms}&minParcel=${searchData.minParcel}&maxParcel=${searchData.maxParcel}&minLiving=${searchData.minLiving}&maxLiving=${searchData.maxLiving}&dakterras=${searchData.dakterras}&klushuis=${searchData.klushuis}&nieuwbouw=${searchData.nieuwbouw}&minEnergyLabel=${searchData.minEnergyLabel}&maxEnergyLabel=${searchData.maxEnergyLabel}&minBouwjaar=${searchData.minBouwjaar}&maxBouwjaar=${searchData.maxBouwjaar}`);
  }

  count() {
    return http.get(`/houses/count`);
  }

  lastUpdate() {
    return http.get(`/houses/last`);
  }

  getFavorites() {
    return http.get(`/houses/favorites`);
  }

  setFavorite(data: Favorite) {
    return http.post(`houses/favorites/`, data);
  }

  deleteFavorite(id: number) {
    return http.delete(`/houses/favorites/${id}`);
  }
}

export default new HouseDataService();