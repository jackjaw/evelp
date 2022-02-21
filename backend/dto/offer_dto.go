package dto

import "math"

type OfferDTO struct {
	ItemId       int
	Name         string
	Quantity     int
	IskCost      float64
	LpCost       int
	Matertials   MatertialDTOs
	MaterialCost float64
	Price        float64
	Income       float64
	Profit       float64
	Volume       int64
	UnitProfit   int
	SaleIndex    int
	IsBluePrint  bool
	Error        bool
	ErrorMessage string
}

const (
	k1 = 100000000
	k2 = 125
	k3 = 32
)

type OfferDTOs []OfferDTO

func (o OfferDTOs) Len() int { return len(o) }

func (o OfferDTOs) Less(i, j int) bool { return o[i].UnitProfit > o[j].UnitProfit }

func (o OfferDTOs) Swap(i, j int) { o[i], o[j] = o[j], o[i] }

func (o *OfferDTO) GenerateSaleIndex() {
	var saleIndex int

	var quantityScore float64
	var iskStreamScore float64
	var unitProfitScore float64

	quantityScore = (2.25/math.Pi)*math.Atan(float64(o.Volume)/20) + 1
	iskStream := o.Price * float64(o.Volume)
	if iskStream <= k1 {
		iskStreamScore = iskStream / k1
	} else {
		iskStreamScore = (math.Log(iskStream/k1))/(math.Log(2)) + 1
	}
	iskStreamScore = iskStreamScore / 2
	unitProfitScore = float64(o.UnitProfit) / k2
	if unitProfitScore > k3 {
		unitProfitScore = k3
	}

	saleIndex = int(quantityScore * iskStreamScore * unitProfitScore)
	o.SaleIndex = saleIndex
}
