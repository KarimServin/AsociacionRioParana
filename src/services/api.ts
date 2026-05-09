const CACHE_DURATION = 1000 * 60 * 10; // 10 minutes cache
const cache = new Map<string, { data: any; timestamp: number }>();

/**
 * Custom fetch for WordPress with simple in-memory caching
 */
export async function fetchWP(endpoint: string, params: Record<string, string> = {}) {
  // Construct query string
  const queryParams = new URLSearchParams(params);
  const cacheKey = `${endpoint}?${queryParams.toString()}`;

  // Check cache
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const url = `https://rioparana.org.ar/cms/wp-json/wp/v2/${endpoint}?${queryParams.toString()}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    
    // Update cache
    cache.set(cacheKey, { data, timestamp: Date.now() });
    
    return data;
  } catch (error) {
    console.error(`Error fetching WP data from ${url}:`, error);
    throw error;
  }
}
