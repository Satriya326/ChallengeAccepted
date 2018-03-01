var tahun = 2018;


function lompatanTahun(tahun)
{
  return ((tahun % 4 == 0) && (tahun % 100 != 0)) || (tahun % 400 == 0);
}

console.log(lompatanTahun(tahun))