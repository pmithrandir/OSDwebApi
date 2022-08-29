import { createContext, useContext, useEffect, useState } from 'react';
import { EventRepository } from '../data/auth/eventRepository';
import { Event } from '../types/Event';
import { Filters } from '../types/Filters';
import { AuthStateContext } from './AuthStateContext';

export const EventDataContext = createContext<EventDataState>({
    isLoading: true,
    filteredData: [],
    filters: {
        alarmState: [],
    },
    setFilters: () => {
        return;
    },
});

export const EventDataProvider = (props: EventDataProviderProps) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Event[]>([]);
    const [filters, setFilters] = useState<Filters>({
        alarmState: [],
    });
    const [filteredData, setFilteredData] = useState<Event[]>([]);

    const { token } = useContext(AuthStateContext);

    const contextValue = {
        isLoading,
        filters,
        filteredData,
        setFilters,
    };

    useEffect(() => {
        new EventRepository(token ?? '').getAllEvents().then((response) => {
            setData(response);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        setFilteredData(
            data.filter((dataPoint: Event) =>
                filters.alarmState.length === 0
                    ? true
                    : filters.alarmState.includes(dataPoint.alarmState)
            )
        );
    }, [data, filters]);

    return (
        <EventDataContext.Provider value={contextValue}>{props.children}</EventDataContext.Provider>
    );
};

interface EventDataProviderProps {
    children: React.ReactNode;
}

interface EventDataState {
    isLoading: boolean;
    filteredData: Event[];
    filters: Filters;
    setFilters: (value: Filters) => void;
}
