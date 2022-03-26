package cache

import (
	"context"
	"evelp/config/global"
	"strings"
	"time"

	"github.com/pkg/errors"
)

var ctx = context.Background()

func Set(key string, value Cacheable, expirationTime time.Duration) error {
	val, err := value.MarshalJSON()
	if err != nil {
		return errors.Wrapf(err, "redis marshal value %v failed", value)
	}

	if err := global.Redis.Set(ctx, key, val, expirationTime).Err(); err != nil {
		return errors.Wrapf(err, "redis set key %v value %v failed", key, val)
	}

	return nil
}

func Get(key string, value Cacheable) error {
	val, err := global.Redis.Get(ctx, key).Result()
	if err != nil {
		return errors.Wrapf(err, "redis get %v failed", key)
	}
	if err := value.UnmarshalJSON([]byte(val)); err != nil {
		return errors.Wrapf(err, "redis unmarshal value %v failed", val)
	}
	return nil
}

func Key(args ...string) string {
	var build strings.Builder
	for index, arg := range args {
		build.WriteString(arg)
		if !(index == len(args)-1) {
			build.WriteString(":")
		}
	}
	return build.String()
}
