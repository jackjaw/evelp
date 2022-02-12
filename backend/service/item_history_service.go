package service

import (
	"evelp/model"
	"evelp/util/cache"
	"strconv"
)

const history = "history"

type ItemHistoryService struct {
	itemId   int
	regionId int
}

func NewItemHistoryService(itemId int, regionId int) *ItemHistoryService {
	return &ItemHistoryService{itemId, regionId}
}

func (h *ItemHistoryService) History() (*model.ItemHistorys, error) {
	var itemHistorys model.ItemHistorys

	key := cache.Key(history, strconv.Itoa(h.regionId), strconv.Itoa(h.itemId))

	if err := cache.Get(key, &itemHistorys); err != nil {
		return nil, err
	}

	return &itemHistorys, nil
}
