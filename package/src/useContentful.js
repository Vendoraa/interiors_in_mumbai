import { useState, useCallback } from 'react';
import { client } from './client';

// Cache object to store API responses
const cache = {};

export const useContentful = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get all entries of a specific content type with caching
  const getEntries = useCallback(async (contentType, options = {}) => {
    const cacheKey = `${contentType}-${JSON.stringify(options)}`;

    if (cache[cacheKey]) {
      return cache[cacheKey];
    }

    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: contentType,
        ...options
      });

      cache[cacheKey] = entries; // Store response in cache
      setLoading(false);
      return entries;
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error('Error fetching entries:', err);
      return null;
    }
  }, []);

  // Get a single entry by ID with caching
  const getEntry = useCallback(async (entryId) => {
    if (cache[entryId]) {
      return cache[entryId];
    }

    try {
      setLoading(true);
      const entry = await client.getEntry(entryId);

      cache[entryId] = entry; // Store response in cache
      setLoading(false);
      return entry;
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error('Error fetching entry:', err);
      return null;
    }
  }, []);

  // Get all assets with caching
  const getAssets = useCallback(async (options = {}) => {
    const cacheKey = `assets-${JSON.stringify(options)}`;

    if (cache[cacheKey]) {
      return cache[cacheKey];
    }

    try {
      setLoading(true);
      const assets = await client.getAssets(options);

      cache[cacheKey] = assets; // Store response in cache
      setLoading(false);
      return assets;
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error('Error fetching assets:', err);
      return null;
    }
  }, []);

  // Get a single asset by ID with caching
  const getAsset = useCallback(async (assetId) => {
    if (cache[assetId]) {
      return cache[assetId];
    }

    try {
      setLoading(true);
      const asset = await client.getAsset(assetId);

      cache[assetId] = asset; // Store response in cache
      setLoading(false);
      return asset;
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error('Error fetching asset:', err);
      return null;
    }
  }, []);

  // Wrap clearCache in useCallback to ensure it is stable
  const clearCache = useCallback(() => {
    console.log('Clearing cache');
    Object.keys(cache).forEach((key) => delete cache[key]);
  }, []);

  return {
    getEntries,
    getEntry,
    getAssets,
    getAsset,
    clearCache,
    loading,
    error
  };
};